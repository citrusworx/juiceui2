// Bold Button
const boldButton = document.getElementById('boldButton');
const textEditor = document.getElementById('text-editor');
// Italicize Button
const italicButton = document.getElementById('italicButton');
// Underline button
const underlineButton = document.getElementById('underlineButton');
// Justify Left button
const justLeftButton = document.getElementById('justLeftButton');
//

boldButton.addEventListener('click', () => {
  if(!textEditor.classList.contains('bolded')){
      boldButton.style.cursor = 'pointer';
      textEditor.style.fontWeight = '700';
      textEditor.classList.add('bolded');
  }
  else {
    textEditor.style.fontWeight = '400';
    textEditor.classList.remove('bolded');
  }
});

italicButton.addEventListener('click', () => {
  if(!textEditor.classList.contains('italiced')){
    textEditor.style.fontStyle = 'italic';
    textEditor.classList.add('italiced');
  }
  else {
    textEditor.style.fontStyle = 'normal';
    textEditor.classList.remove('italiced');
  }
});

underlineButton.addEventListener('click', () => {
  if(!textEditor.classList.contains('underlinio')){
    textEditor.style.textDecoration = 'underline';
    textEditor.classList.add('underlinio');
  }
  else {
    textEditor.style.textDecoration = 'none';
    textEditor.classList.remove('underlinio');
  }
});

justCenterButton.addEventListener('click', () => {
  if(!textEditor.classList.contains('lefterized')){
    textEditor.style.textAlign = 'left';
    textEditor.classList.add('lefterized');
  }
  else
    {
        textEditor.style.textAlign = 'left';
        textEditor.classList.remove('lefterized');
    }
})

justCenterButton.addEventListener('click', () => {
  if(!textEditor.classList.contains('centerized')){
    textEditor.style.textAlign = 'center';
    textEditor.classList.add('centerized');
  }
  else
    {
    textEditor.style.textAlign = 'left';
    textEditor.classList.remove('centerized');
    }
})
