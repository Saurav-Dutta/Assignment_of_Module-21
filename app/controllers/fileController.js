import multer from "multer";
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: './upload/',
    filename: (req, file, cb) => {
        const name = Date.now() + '-' + file.originalname
        cb(null, name);
    }
});

const upload = multer({ storage: storage }).single('file');


// Upload file
export const uploadFile = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: 'File upload failed', error: err.message });
        }
        res.status(200).json({ message: 'File uploaded successfully',
            file: req.file
        });
    });
};

//read file
export const readFile = async (req, res) => {
    try {
        const filePath = path.join(__dirname, '../../upload/', req.params.filename);
        const fileData = await fs.readFile(filePath, 'utf8');
        res.status(200).json({ message: 'File read successfully', data: fileData });
    } catch (error) {
        res.status(500).json({ message: 'Failed to read file', error: error.message });
    }
};

// Delete file
export const deleteFile = async (req, res) => {
    try {
        const filePath = path.join(__dirname, '../../upload', req.params.filename);
        await fs.unlink(filePath);
        res.status(200).json({ message: 'File deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete file', error: error.message });
    }
};
