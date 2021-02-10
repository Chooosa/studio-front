import React from 'react'
import { useSelector } from 'react-redux'
import { colorSelectors } from '../../redux/color/color.selectors'

import { NotwFoundWrapper, Numbers } from './not-found.styles'

const NotFound = () => {
   const color = useSelector(colorSelectors.color)

   return (
      <NotwFoundWrapper>
         <Numbers color={color}>&lt;404&gt;</Numbers>
      </NotwFoundWrapper>
   )
}

export default NotFound