export function isLink(text: string): boolean {
  const linkPattern = /\[(.*?)\]\((.*?)\)/g;
  const match = text?.match(linkPattern);
  return match !== null;

  // use case   :
  // console.log(isLink('[text](http://myUrl.com)')); // true
  // console.log(isLink('text http://myUrl.com')); // false
  // console.log(isLink('http://myUrl.com')); // false
  // console.log(isLink('not a link')); // false
}
// -------------------------------------------------------------------------------
export function removeLink(text: string): string {
  const linkPattern = /\[(.*?)\]\((.*?)\)/g;
  // Remplace les liens par une chaîne vide
  // Remplace les liens par une chaîne vide
  return text.replace(linkPattern, '$1');

  // use case   :
  // const string1: string = '[texteAZ?09](linkddAZ?09)';
  // console.log(removeLink(string1)); // Affiche 'texteAZ?09'
}
// -------------------------------------------------------------------------------
export function addLink(text: string , url: string): string  {
  return `[${text}](${url})`;
}

// -------------------------------------------------------------------------------
