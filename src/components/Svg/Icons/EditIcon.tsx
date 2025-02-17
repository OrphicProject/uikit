import React from 'react'
import { Box } from '../../Box'

const EditIcon = (props: React.ComponentProps<typeof Box>) => {
  return (
    <Box
      as="svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#929292"
      {...props}
    >
      <path
        d="M14.5 2.50023C14.8978 2.1024 15.4374 1.87891 16 1.87891C16.2786 1.87891 16.5544 1.93378 16.8118 2.04038C17.0692 2.14699 17.303 2.30324 17.5 2.50023C17.697 2.69721 17.8532 2.93106 17.9598 3.18843C18.0665 3.4458 18.1213 3.72165 18.1213 4.00023C18.1213 4.2788 18.0665 4.55465 17.9598 4.81202C17.8532 5.06939 17.697 5.30324 17.5 5.50023L5 18.0002L1 19.0002L2 15.0002L14.5 2.50023Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Box>
  )
}

export default EditIcon
