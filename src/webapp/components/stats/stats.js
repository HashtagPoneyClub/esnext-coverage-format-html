import h from 'virtual-dom/h';
import toPercentage from '../../services/to-percentage';
import getMetricTagTitle from '../../services/get-metric-tag-title';

function generateStats(metrics) {
  return Object.keys(metrics).map(tag => {
    const {covered, total} = metrics[tag];
    const ratio = total ? covered / total : 1;
    return h('div', {className: 'stat'}, [
      h('div', {className: 'tagName'}, [getMetricTagTitle(tag)]),
      h('div', {className: 'tagPercentage'}, [toPercentage(ratio)]),
      h('div', {className: 'tagCount'}, [`${covered}/${total}`])
    ]);
  });
}

export default function stats(subtree) {
  return h('div', {
    className: 'stats'
  }, generateStats(subtree.metrics));
}
