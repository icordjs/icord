import { ConsoleLoggerOptions, Logger } from "../index";

/**
 * Decorator factory that creates a Logger instance as a property of a class.
 * @param {string} [className] - Optional name of the class for which the logger is created.
 * @param {ConsoleLoggerOptions} [options] - Optional configuration options for the logger.
 * @returns A decorator function that can be used to decorate a class property with a Logger instance.
*/

type ParameterDecoratorEx = (
    target: Record<string, any>,
    propertyKey: string
) => void;


export const IcordLogger = (className?: string, options?: ConsoleLoggerOptions): ParameterDecoratorEx => {
    /**
     * The factory returns a decorator function that takes two parameters:
     * target: The prototype of the class where the decorated property is defined.
     * propertyKey: The name of the property that will be decorated. It can be a string or a symbol.
    */
    return function (target: Record<string, any>, propertyKey: string) {
        /**
         * Inside the decorator function, a new instance of Logger is created with the provided className and options.
        */

        let logger: Logger = new Logger(className, options);

        if (target.hasOwnProperty(propertyKey)) {
            logger.warn(`Property ${String(propertyKey)} already exists on ${target.constructor.name}, IcordLogger will override it.`);
        }

        /**
         * This line uses Object.defineProperty to define a new property on the target (the class prototype). The property is defined with the following descriptor:
         * get: A getter function that returns the logger instance when the property is accessed.
         * enumerable: A boolean indicating whether the property will be included in for...in loops and Object.keys() calls. It is set to true, making the property enumerable.
         * configurable: A boolean indicating whether the property can be deleted and whether its attributes can be changed. It is set to true, allowing further configuration.
        */
        Object.defineProperty(target, propertyKey, {
            get: () => logger,
            set: (newLogger: Logger) => { logger = newLogger },
            configurable: true,
            enumerable: true,
        });
    };
};
