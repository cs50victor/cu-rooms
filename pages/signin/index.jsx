import { useEffect, useState } from "react"
import tw, { styled, css } from "twin.macro"
import Link from "next/link"
import MarketingContainer from "@layouts/MarketingContainer"
import { Input, Button, LoadingCircle, StyledLink } from "@components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const SmallDiv = styled.div(() => [
  tw`relative w-full text-center text-neutral-5 after:(right-0) before:(left-0)`,
  css`
    &:before,
    &:after {
      ${tw`inline-block absolute 
      top-1/2 content[""] 
      border-bottom[1px solid rgba(var(--neutral-4))]
      width[calc(50% - 4em)]
      `};
    }
    ,
    > small {
      ${tw`inline-block`}
    }
  `,
])

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required!")
    .min(6, "Email should be between 5 and 50 characters")
    .max(50),
})

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => {
    setIsLoading(true)
    console.log(data)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <MarketingContainer title="Log in | starter" footer noHeaderNav>
      <main
        tw="min-h-screen max-w-screen-sm w-full
          mx-auto px-4 pb-28 md:(px-8) flex
          flex-col items-center justify-center"
      >
        <h1 tw="text-3xl sm:text-5xl  text-center pt-10 pb-0">Log in to starter</h1>
        <div tw="px-2 sm:px-16 space-y-5">
          <div tw="mt-8">
            Full width buttons with OAuth from different sign-up buttons
          </div>

          <SmallDiv>
            <small>Or use your email</small>
          </SmallDiv>
        </div>

        <form
          tw="space-y-5 text-left
              px-2 sm:px-16
              pt-5 pb-16
              w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              aria-label="Email address"
              autoComplete="email"
              autoCapitalize="none"
              maxLength="50"
              {...register("email")}
              error={!!errors?.email}
              noLabel
              required
            />
            <small tw="text-red-700">{errors?.email?.message}</small>
          </div>
          <Button
            type="submit"
            tw="flex items-center justify-center"
            disabled={!!isLoading}
            variant="primary"
            isLarge
          >
            {isLoading ? <LoadingCircle /> : "Continue with Email"}
          </Button>
          <div tw="flex flex-col items-center justify-center">
            Don't have an account?
            <Link href="/signup" passHref>
              <StyledLink arrow="right" variant="blue" underline>
                Sign up
              </StyledLink>
            </Link>
          </div>
        </form>
      </main>
    </MarketingContainer>
  )
}

Login.theme = "light"
