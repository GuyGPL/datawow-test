import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    InternalServerErrorException,
} from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";
import { FormatterExceptionDto } from "./formatter-exception.dto";

@Catch()
export class FormatterExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: unknown, host: ArgumentsHost): void {
        const { httpAdapter } = this.httpAdapterHost;

        const ctx = host.switchToHttp();

        const httpException =
            exception instanceof HttpException
                ? exception
                : new InternalServerErrorException("Something went wrong");

        const httpStatus = httpException.getStatus();
        const excResponse = httpException.getResponse();

        const responseBody: FormatterExceptionDto = {
            statusCode: httpStatus,
            timestamp: new Date().toISOString(),
            path: httpAdapter.getRequestUrl(ctx.getRequest()) as string,
            message: httpException.message,
            error:
                typeof excResponse === "string"
                    ? undefined
                    : (excResponse as Record<string, any>)["error"],
        };

        httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    }
}
