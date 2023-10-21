export function inspect(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const medotoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`--- Método ${propertyKey}`);
    console.log(`------ paramêtros: ${JSON.stringify(args)}`);
    const retorno = medotoOriginal.apply(this, args);
    console.log(`------ retorno: ${JSON.stringify(retorno)}`);
    return retorno;
  };

  return descriptor;
}
