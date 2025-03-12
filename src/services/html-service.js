export  class HtmlCreator {



  /**
   * The function `createSingleInfo` creates a new HTML element with the specified tag name and text
   * content.
   * @param {keyof HTMLElementTagNameMap} tagName - The `tagName` parameter is the type of HTML element you want to create, such as
   * 'div', 'p', 'span', 'h1', etc.
   * @param {string} nodeText - The `nodeText` parameter in the `createSingleInfo` function is the text content
   * that will be added inside the newly created HTML element specified by the `tagName` parameter.
   * @param {string[]?} cssClasses
   * @returns {HTMLElement} The `createSingleInfo` function returns a newly created HTML element with the specified
   * tag name and text content.
   */
  static createSingleInfo(tagName, nodeText, cssClasses) {
    const newTag = document.createElement(tagName)
    const tagTextNode = document.createTextNode(nodeText)
    newTag.appendChild(tagTextNode)

    if (cssClasses) cssClasses.forEach(cls => newTag.classList.add(cls))
    return newTag
  }
}

