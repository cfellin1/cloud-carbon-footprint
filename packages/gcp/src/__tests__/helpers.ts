/*
 * © 2021 ThoughtWorks, Inc.
 */
export function setupSpy(
  spyMethod: any,
  targetFunction: string,
  returnValue: any,
): void {
  const targetFunctionSpy = jest.spyOn(spyMethod, targetFunction)
  ;(targetFunctionSpy as jest.Mock).mockResolvedValue(returnValue)
}

export function setupSpyWithMultipleValues(
  spyMethod: any,
  targetFunction: string,
  defaultReturnValue: any,
  secondaryReturnValue: any,
): void {
  const targetFunctionSpy = jest.spyOn(spyMethod, targetFunction)
  ;(targetFunctionSpy as jest.Mock).mockResolvedValueOnce(defaultReturnValue)
  ;(targetFunctionSpy as jest.Mock).mockResolvedValueOnce(secondaryReturnValue)
}
