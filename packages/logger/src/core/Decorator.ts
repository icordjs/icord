import { ConsoleLoggerOptions, Logger } from "../index";

/**
 * Decorator factory that creates a Logger instance as a property of a class.
 * @param {string} [className] - Optional name of the class for which the logger is created.
 * @param {ConsoleLoggerOptions} [options] - Optional configuration options for the logger.
 * @returns A decorator function that can be used to decorate a class property with a Logger instance.
*/

export const IcordLogger = (className?: string, options?: ConsoleLoggerOptions) => {
    /**
     * The factory returns a decorator function that takes two parameters:
     * target: The prototype of the class where the decorated property is defined.
     * propertyKey: The name of the property that will be decorated. It can be a string or a symbol.
    */
    return function (target: any, propertyKey: string | symbol) {
        /**
         * Inside the decorator function, a new instance of Logger is created with the provided className and options.
        */

        const logger = new Logger(className, options);

        /**
         * This line uses Object.defineProperty to define a new property on the target (the class prototype). The property is defined with the following descriptor:
         * get: A getter function that returns the logger instance when the property is accessed.
         * enumerable: A boolean indicating whether the property will be included in for...in loops and Object.keys() calls. It is set to true, making the property enumerable.
         * configurable: A boolean indicating whether the property can be deleted and whether its attributes can be changed. It is set to true, allowing further configuration.
        */
        Object.defineProperty(target, propertyKey, {
            get: () => logger,
            configurable: false,
            enumerable: true,
        });
    };
};