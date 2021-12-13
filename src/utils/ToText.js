export default function ToText(node) {
  const tag = document.createElement('div');
  tag.innerHTML = node;
  return tag.innerText;
}
