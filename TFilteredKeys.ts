type TFilterKeys<T, U> = {
  [P in keyof T]: T[P] extends U ? P : never;
}[keyof T];

/**
 * Фильтрует поля в типе, оставляя только те, которые наследуются от некоего другого типа.
 * @template T Тип, который нужно отфильтровать
 * @template U Тип, в соответствии с которым производится фильтрация
 */
export type TFilteredKeys<T, U> = {
  [Q in TFilterKeys<T, U>]: T[Q];
};
