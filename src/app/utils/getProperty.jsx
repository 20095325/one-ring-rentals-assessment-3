import { cache } from 'react'
import { properties } from '../js/properties';
export const revalidate = 3600 // Cache request for an hour
 // get current property page based on slug in URL
export const getProperty = (slug) => {
  const property = properties.find((prop) => prop.slug === slug)
  return property
}