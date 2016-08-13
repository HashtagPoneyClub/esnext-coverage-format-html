import h from 'virtual-dom/h';

function projectLink() {
  return h('a', {
    href: 'https://github.com/esnext-coverage'
  }, ['esnext-coverage']);
}

export default function footer({timestamp}) {
  return h('div', {
    className: 'footer'
  }, [
    'Generated by ',
    projectLink(),
    ` on ${new Date(timestamp)}`
  ]);
}