export interface FormatterExceptionDto {
    statusCode: number;
    timestamp: string;
    path: string;
    message: string | string[];
    error?: Record<string, string>;
}
