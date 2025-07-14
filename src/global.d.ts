declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

// declare module "*.scss" {
//   const classNames: { [className: string]: string };
//   export default classNames;
// }
