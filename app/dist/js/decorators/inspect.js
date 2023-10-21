export function inspect(target, propertyKey, descriptor) {
    const medotoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Método ${propertyKey}`);
        console.log(`------ paramêtros: ${JSON.stringify(args)}`);
        const retorno = medotoOriginal.apply(this, args);
        console.log(`------ retorno: ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map