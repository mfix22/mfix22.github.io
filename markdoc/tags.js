import { Tag } from "@markdoc/markdoc"
import { Badge } from "../components/Badge"
import { List } from "../components/List"

export { comment } from "@markdoc/next.js/tags"

export const badge = {
  render: Badge,
}

export const list = {
  render: List,
  attributes: {
    max: { type: Number },
  },
  transform(node, config) {
    const children = node.transformChildren(config)
    return new Tag(
      this.render,
      node.transformAttributes(config),
      children[0].children
    )
  },
}
