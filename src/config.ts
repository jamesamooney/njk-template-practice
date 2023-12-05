function getOrThrow(variableName: string): string {
  const variableValue = process.env[variableName] ?? null
  if (variableValue === null) {
    throw new Error(`${variableName} variable not set`)
  } else {
    return variableValue
  }
}

export function portNumber(): string {
  return getOrThrow("PORT")
}