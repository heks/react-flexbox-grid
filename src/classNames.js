import styles from 'flexboxgrid-sass';

export default function getClass(className) {
  return (styles && styles[className]) ? styles[className] : className;
}
