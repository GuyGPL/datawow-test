import {
    ArgumentMetadata,
    PipeTransform,
    UnprocessableEntityException,
} from "@nestjs/common";
import { ZodError, ZodSchema } from "zod";

export class ZodValidatorPipe<T, R> implements PipeTransform<T, Promise<R>> {
    constructor(private readonly schema: ZodSchema) {}

    async transform(value: T, _metadata: ArgumentMetadata): Promise<R> {
        try {
            return await this.schema.parseAsync(value);
        } catch (err) {
            if (!(err instanceof ZodError)) throw err;
            throw new UnprocessableEntityException({
                message: "Validation Object failed.",
                error: {
                    [_metadata.type]: (err as ZodError).errors,
                },
            });
        }
    }
}
