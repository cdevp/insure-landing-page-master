let $ = function(elementId: string): Element {
   return document.getElementById(elementId);
}

$('mobile-menu').addEventListener('click', (): void => {
    console.log('asdfa');
});
