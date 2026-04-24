import * as fs from 'fs';
import * as path from 'path';

const LOG_DIR = path.join(__dirname, 'logs');
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const LOG_ROTATION_COUNT = 5;

if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR);
}

class Logger {
    private currentLogFile: string;
    private currentFileSize: number;
    private logFiles: string[] = [];

    constructor() {
        this.currentLogFile = this.getLogFileName();
        this.currentFileSize = 0;
        this.logFiles.push(this.currentLogFile);
    }
    
    private getLogFileName(): string {
        const date = new Date().toISOString().replace(/:/g, '-');
        return path.join(LOG_DIR, `log-${date}.txt`);
    }
    
    public log(message: string): void {
        const logMessage = `${new Date().toISOString()} - ${message}\n`;
        fs.appendFileSync(this.currentLogFile, logMessage);
        this.currentFileSize += Buffer.byteLength(logMessage);
        this.rotateLogsIfNeeded();
    }
    
    private rotateLogsIfNeeded(): void {
        if (this.currentFileSize >= MAX_FILE_SIZE) {
            this.currentLogFile = this.getLogFileName();
            this.currentFileSize = 0;
            this.logFiles.push(this.currentLogFile);
            if (this.logFiles.length > LOG_ROTATION_COUNT) {
                fs.unlinkSync(this.logFiles.shift()!);
            }
        }
    }
}

export const logger = new Logger();