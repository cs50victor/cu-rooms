import { useEffect, useState } from "react"
import Image from "next/image"
import tw from "twin.macro"
import { StyledLink, ExternalLink, Img } from "@components"
import { Button } from "@components"
import MarketingContainer from "@layouts/MarketingContainer"
import { defaultImageBlur } from "@utils/imageBlur"

export default function Docs() {
  return (
    <MarketingContainer title="Setup Docs" fixed footer footerNav>
      <main tw="max-w-screen-md mx-auto space-y-3 px-5 mt-20 w-full overflow-x-hidden">
        <div>
          <h1 tw="text-3xl sm:text-5xl">
            <strong tw="text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-600 tracking-wider">
              v1.2
            </strong>
          </h1>

          <h2 tw="text-xl sm:text-3xl mt-8">Quick Setup</h2>
          <div>
            <h2 tw="mt-5">Make Logo</h2>
            <ul tw="list-disc ml-5">
              <li>
                Use{" "}
                <ExternalLink href="https://spark.adobe.com/express-apps/logomaker/preview">
                  <StyledLink variant="blue" as="span">
                    spark.adobe.com/express-apps/logomaker/preview
                  </StyledLink>
                </ExternalLink>
              </li>
              <li>
                Crop excess space around logo{" "}
                <ExternalLink href="https://www.iloveimg.com/crop-image">
                  <StyledLink variant="blue" as="span">
                    iloveimg.com/crop-image
                  </StyledLink>
                </ExternalLink>
              </li>
              <li>Color the png</li>
              <li>
                Remove background + resize to 500 x 500{" "}
                <ExternalLink href="https://www.remove.bg/upload">
                  <StyledLink variant="blue" as="span">
                    remove.bg/upload
                  </StyledLink>
                </ExternalLink>{" "}
                save as logo.png
              </li>
            </ul>

            <h2 tw="mt-5">Logo to SVG</h2>
            <ul tw="list-disc ml-5">
              <li>
                Use{" "}
                <ExternalLink href="https://image.online-convert.com/convert-to-svg">
                  <StyledLink variant="blue" as="span">
                    https://image.online-convert.com/convert-to-svg
                  </StyledLink>
                </ExternalLink>
              </li>
            </ul>

            <h2 tw="mt-5">Favicon</h2>
            <ul tw="list-disc ml-5">
              <li>
                upload a square png image (260x260) to{" "}
                <ExternalLink href="https://realfavicongenerator.net">
                  <StyledLink variant="blue" as="span">
                    realfavicongenerator.net
                  </StyledLink>
                </ExternalLink>
              </li>
              <li>update files in public/favicons</li>
            </ul>

            <h2 tw="mt-5">Logo SVG</h2>
            <ul tw="list-disc ml-5">
              <li>npx @svgr/cli --icon public/logo.svg</li>
              <li>copy and override the one in components/Logo.jsx</li>
            </ul>

            <h2 tw="mt-5">Fonts</h2>
            <ul tw="list-disc ml-5">
              <li>public/fonts/</li>
              <li>pages/_document.jsx</li>
              <li>tailiwind.config.js</li>
              <li>baseCSS.js</li>
              <li>next.config.json</li>
            </ul>

            <h2 tw="mt-5">Typography classes</h2>
            <ul tw="list-disc ml-5">
              <li>GlobalStyles.jsx</li>
            </ul>

            <h2 tw="mt-5">Brand Color</h2>
            <ul tw="list-disc ml-5">
              <li>tailiwind.config.js</li>
            </ul>

            <h2 tw="mt-5">Brand Name (change from quickPrep)</h2>
            <ul tw="list-disc ml-5">
              <li>components/MarketingFooter.jsx</li>
              <li>layouts/*</li>
              <li>pages/index.jsx</li>
              <li>pages/login.jsx</li>
              <li>pages/signup.jsx</li>
            </ul>

            <h2 tw="mt-5">Cors</h2>
            <ul tw="list-disc ml-5">
              <li>next.config.js</li>
              <li>cors scripting and proxy (to connect with external backend)</li>
              <li>
                More on Cors *Security Headers*{" "}
                <ExternalLink href="https://nextjs.org/docs/advanced-features/security-headers">
                  <StyledLink variant="blue" as="span">
                    Next.js Cors header
                  </StyledLink>
                </ExternalLink>
              </li>
            </ul>

            <h2 tw="mt-5">use layout like</h2>
            <ul>
              <li>{"<Container>"}</li>
              <ul tw="ml-3">
                <li>main</li>
                <li>section</li>
                <li>section</li>
                <li>main</li>
              </ul>
              <li>{"<Container/>"}</li>
            </ul>
            <br />

            <ul tw="list-disc ml-5">
              <li>
                <ExternalLink href="https://og-image.vercel.app">
                  <StyledLink variant="blue" as="span">
                    og-image.vercel.app
                  </StyledLink>
                </ExternalLink>
              </li>
              <li>
                SQL design {" - "}
                <ExternalLink href="https://drawsql.app">
                  <StyledLink variant="blue" as="span">
                    drawsql.app
                  </StyledLink>
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://tailwindui.com/">
                  <StyledLink variant="blue" as="span">
                    tailwindui.com
                  </StyledLink>
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://www.tailwind-kit.com/">
                  <StyledLink variant="blue" as="span">
                    tailwind-kit.com
                  </StyledLink>
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://wickedblocks.dev/">
                  <StyledLink variant="blue" as="span">
                    wickedblocks.dev
                  </StyledLink>
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://dev.to/noclat/build-a-full-api-with-next-js-1ke">
                  <StyledLink variant="blue" as="span">
                    build-a-full-api-with-next-js
                  </StyledLink>
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://dev.to/hunterbecton/middleware-in-next-js-moving-from-express-1bmf">
                  <StyledLink variant="blue" as="span">
                    https://dev.to/hunterbecton/middleware-in-next-js-moving-from-express-1bmf
                  </StyledLink>
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://github.com/shdnx/next-express">
                  <StyledLink variant="blue" as="span">
                    next-express
                  </StyledLink>
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://blurha.sh/">
                  <StyledLink variant="blue" as="span">
                    Blur 1
                  </StyledLink>{" "}
                  for Image Component
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://png-pixel.com/">
                  <StyledLink variant="blue" as="span">
                    Blur 2
                  </StyledLink>{" "}
                  for Image Component
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://icons8.com/illustrations">
                  <StyledLink variant="brand" as="span">
                    Icons8
                  </StyledLink>{" "}
                  Free High Quality Illustrations
                </ExternalLink>
              </li>
            </ul>
          </div>

          <h2 tw="text-xl sm:text-3xl mt-8 mb-3">Components</h2>
          <div tw="w-64 mb-10 pb-10 flex flex-col">
            <div tw="space-y-3">
              <p tw="text-2xl font-bold">
                Buttons
                <span tw="text-indigo-500 font-medium text-base">
                  props=[variant, isSmall, isLarge, isBold]
                </span>
              </p>
              <hr />
              <Button>Default</Button>
              <Button variant="primary">variant="primary"</Button>
              <Button variant="secondary">variant="secondary"</Button>
              <Button variant="inverted">variant="inverted"</Button>
              <Button variant="outline">variant="outline"</Button>
              <Button variant="gray">variant="gray"</Button>
            </div>
            <div tw="space-y-3 mt-10 flex flex-col">
              <p tw="text-2xl font-bold">
                Links
                <span tw="text-indigo-500 font-medium text-base">
                  props=[arrow, variant, underline]
                </span>
              </p>
              <hr />
              <StyledLink
                arrow="right"
                variant="blue"
                tw="text-xl font-semibold"
                underline
              >
                variant="blue"
              </StyledLink>
              <StyledLink arrow="right" variant="brand" tw="text-xl font-semibold">
                variant="brand"
              </StyledLink>
              <StyledLink arrow="right" variant="primary" tw="text-xl font-semibold">
                variant="primary"
              </StyledLink>
              <StyledLink arrow="right" variant="secondary" tw="text-xl font-semibold">
                variant="secondary"
              </StyledLink>
            </div>
            <div tw="space-y-3 my-10 flex flex-col w-auto ">
              <p tw="text-2xl font-bold">Typography Classes</p>
              <hr tw="w-64" />
              <a className="nav-link">.nav-link</a>
              <div className="caption">.caption</div>
              <div className="sub-text">.sub-text</div>
              <p className="p">.p</p>
              <h3 className="h3">.h3</h3>
              <h2 className="h2">.h2</h2>
              <h1 className="h1">.h1</h1>
              <a className="nav-title">.nav-title</a>
              <p className="subhead">.subhead</p>
              <p className="subhead-lg">.subhead-lg</p>
              <h2 className="h2-headline">.h2-headline</h2>
              <h1 className="hero-headline">.hero-headline</h1>
              <p className="section-headline">.section-headline</p>
              <h1 className="hero-headline-lg">.hero-headline-lg</h1>
            </div>
            <Img
              src={
                "https://images.unsplash.com/photo-1647954198863-f042bebf276e?w=1635&q=80"
              }
              width={900}
              height={1500}
              alt=""
            />
          </div>
        </div>
      </main>
    </MarketingContainer>
  )
}

Docs.theme = "light"
