type VariableType = 'bool' | 'i8';

interface VariableValue {
  type: VariableType,
  value: number,
}

interface VariableProps {
  name: string,
  isConst: boolean,
  definedAtLine: number,
}

interface Variable {
  props: VariableProps
  value?: VariableValue
  memoryAdr: number
}

let memCounter = 0x800;
const varMap = new Map<string, Variable>();

function varInit(props: VariableProps, value?: VariableValue) {
  if (varMap.has(props.name)) {
    throw new Error('Reinitialization of existing variable')
  }

  varMap.set(props.name, {props: {...props}, memoryAdr: memCounter, value: {...value}} as Variable);

  memCounter++;
}

function assignThatVariableExists(name: string) {
  if (!varMap.has(name)) {
    throw new Error(`There is no variable with name ${name}`);
  }
}

function varGet(name: string) {
  assignThatVariableExists(name);

  const v = varMap.get(name);

  if (v?.value === undefined) {
    throw new Error(`Variable ${name}, defined at line #${v?.props.definedAtLine} is undefined`);
  }

  return v.value;
}

function varGetAdr(name: string) {
  assignThatVariableExists(name);

  const v = varMap.get(name);

  return v?.memoryAdr;
}

function varAssign(name: string, value: VariableValue) {
  assignThatVariableExists(name);

  const v = varMap.get(name);

  if (v?.props.isConst) {
    throw new Error(`Cannot assign value to variable with name ${name}. Because its const`);
  }

  if (v?.value?.type !== value.type) {
    throw new Error(`Cannot assign value to variable with name ${name}. Tried to assign value with type ${value.type} to variable with type ${v?.value?.type}.`);
  }

  v.value = { ...value };

  return { ...v.value };
}

export { varInit, varGet, varGetAdr, varAssign, VariableValue, VariableType, VariableProps }