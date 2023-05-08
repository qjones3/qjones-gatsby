export interface DrupalNode {
  id: string
  drupal_internal__nid: number
  title: string
  path: {
    alias: string
  }
  default_langcode: boolean
  langcode: string
}