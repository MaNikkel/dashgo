import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage} from "@chakra-ui/react";
import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";


interface InputProps extends ChakraInputProps{
  name: string;
  label?: string;
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement,InputProps> = ({ name, label, error,...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel
        htmlFor={name}

      >
        {label}
      </FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        backgroundColor="gray.900"
        variant="filled"
        size="lg"
        ref={ref}
        _hover={{ 
          backgroundColor: 'gray.900'
        }}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
}

export const Input = forwardRef(InputBase)