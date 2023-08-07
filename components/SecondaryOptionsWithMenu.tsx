'use client'

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Button,
  Stack,
  Flex,
} from '@chakra-ui/react'

// IoLocateSharp
import { BsThreeDotsVertical, BsChatSquareQuote } from 'react-icons/bs'
import { RiFileShredLine } from 'react-icons/ri'
import { SiGooglemaps } from "react-icons/si";
import {MdOutlineCalculate} from "react-icons/md";

export default function SecondaryOptions() {
  return (
    /**
     * You may move the Popover outside Flex.
     */
    <Flex justifyContent="center" mt={0}>
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          <IconButton
            aria-label="More server options"
            icon={<BsThreeDotsVertical />}
            variant="solid"
            w="fit-content"
          />
        </PopoverTrigger>
        <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
          <PopoverArrow />
          <PopoverBody>
            <Stack>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<SiGooglemaps />}
                justifyContent="space-between"
                fontWeight="normal"
                fontSize="sm">
                Locate Ingredients
              </Button>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<MdOutlineCalculate />}
                justifyContent="space-between"
                fontWeight="normal"
                // colorScheme="red"
                fontSize="sm">
                Calories breakdown
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  )
}