import {Tag} from '@markdoc/markdoc';
import {List} from '../components/List';
import {Map} from '../components/Map';

export {comment} from '@markdoc/next.js/tags';

export const list = {
  render: List,
  attributes: {
    max: {type: Number},
  },
  transform(node, config) {
    const children = node.transformChildren(config);
    return new Tag(
      this.render,
      node.transformAttributes(config),
      children[0].children
    );
  },
};

export const map = {
  render: Map,
  attributes: {},
};
