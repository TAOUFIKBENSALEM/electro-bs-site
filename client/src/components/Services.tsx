import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Home, Camera, Wind, Wrench } from "lucide-react";

/**
 * Services Component
 * Design: Minimalisme Industriel Moderne
 * - Cards minimalistes avec icônes et images
 * - Grille asymétrique
 * - Hover effects subtils
 */

const services = [
  {
    id: 1,
    title: "Électricité Générale",
    description:
      "Installation, maintenance et réparation de tous vos systèmes électriques résidentiels et commerciaux.",
    icon: Zap,
    image:
      "https://private-us-east-1.manuscdn.com/sessionFile/mimfcLv8DY6bMbUSipActj/sandbox/WyfJK2Kysy7crx0PG4gGPW-img-5_1771071313000_na1fn_c2VydmljZXMtZWxlY3RyaWNpdGU.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbWltZmNMdjhEWTZiTWJVU2lwQWN0ai9zYW5kYm94L1d5ZkpLMkt5c3k3Y3J4MFBHNGdHUFctaW1nLTVfMTc3MTA3MTMxMzAwMF9uYTFmbl9jMlZ5ZG1salpYTXRaV3hsWTNSeWFXTnBkR1UucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=q4keeFHoi1XkHN-jaxrLVJUSvG6w85cB3nDKTXoLTqpy0aEhmY3P3GkQDyXsn3Z9XuHZK0dsrsR1FisK50ovu-gG6EvM0gnxAmANX6-ydprhhBdQTk7ClZVzLp-RGCD9UsiGK0hzItG4i~gHLQgV3VEiIj4JrnkNalP7FjJ88fh15QLIswAZkL9g~l2ElBoTDqRJGk2Xgdikq1rEQyzSb72Pp3GgwK4RcKCJRbVulmfweKaIf2DNqa4M1PL4-gT6QWcaETFAkP~QZlHEPUKQNXEPusEh5tGBqDPE5i~p02dg7o6sGXhrWzYogrmRfbdOifHlCq501I~p8lp1zNcvaw__",
  },
  {
    id: 2,
    title: "Domotique",
    description:
      "Solutions domotiques sur mesure pour automatiser et contrôler votre maison ou bâtiment.",
    icon: Home,
    image:
      "https://private-us-east-1.manuscdn.com/sessionFile/mimfcLv8DY6bMbUSipActj/sandbox/WyfJK2Kysy7crx0PG4gGPW-img-2_1771071310000_na1fn_c2VydmljZXMtZG9tb3RpcXVl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbWltZmNMdjhEWTZiTWJVU2lwQWN0ai9zYW5kYm94L1d5ZkpLMkt5c3k3Y3J4MFBHNGdHUFctaW1nLTJfMTc3MTA3MTMxMDAwMF9uYTFmbl9jMlZ5ZG1salpYTXRaRzl0YjNScGNYVmwucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=e7fO7yOIPvdJeOA3ub~K5z7A76oXrnGMVr-WZaBn4QvcAl4lAiTaFs3AF7D9FlzYZ6yVHJ9oh8RFVBeC4Tjk~LdIYUXKAnhFzIw4zqEnWmq3uWKMe5G86I-8p~AOhq9twgXN4-DOtsl72jVI77SgcI0nu-znmHSd0Fwuef4JYkktnftp1T8n4jjGxPxKPFq1tMmq0Gu8rN5IgYdujJfFdtUavzHQ4-McDedQ0UH3ACMI3Nf5HupTbABsWRPOnL5FnYOv1Uh500cmx6130VOIE0Emd3ZP5WmGYR~VGM5WJpsFZMDEPB~3j-tJshwmqRRArk7R-uu3uRI1rJ6HBIlt2A__",
  },
  {
    id: 3,
    title: "Vidéosurveillance",
    description:
      "Systèmes de surveillance modernes pour sécuriser vos locaux 24h/24, 7j/7.",
    icon: Camera,
    image:
      "https://private-us-east-1.manuscdn.com/sessionFile/mimfcLv8DY6bMbUSipActj/sandbox/WyfJK2Kysy7crx0PG4gGPW-img-3_1771071308000_na1fn_c2VydmljZXMtc3VydmVpbGxhbmNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbWltZmNMdjhEWTZiTWJVU2lwQWN0ai9zYW5kYm94L1d5ZkpLMkt5c3k3Y3J4MFBHNGdHUFctaW1nLTNfMTc3MTA3MTMwODAwMF9uYTFmbl9jMlZ5ZG1salpYTXRjM1Z5ZG1WcGJHeGhibU5sLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KJuuMfl6F2qPHo3hSIyy7TJY7f1xYtUMGDub~cst5zYJfuihK~apYAgOgYIu~rkTZm3BbbTB8nos5qsWFGRlo8kk0g57dPwgh09cIQ-kH5GaxgKJmMsKwQ1~lv-6oxYxEgvBT760kWW2I4v9caGan3081VcgTXyQVkMC-DYZmfcaa1hosgtXWfAAeslfQBobfGIR1nM4Ta4Q31NA4bOS2jzBlFaU91u0W6kI1niYHx6ygXP3kV4CAPMoJ6iY41VstmSgDWyWjPzsFxvFohyoAsb8NGdAV0nV9iG0f~ZtkEyTiUX~HtWGyOA1dVNtuVU0hROsyQxad0e~SI46mZrgYA__",
  },
  {
    id: 4,
    title: "Climatisation",
    description:
      "Installation et maintenance de systèmes de climatisation et de chauffage performants.",
    icon: Wind,
    image:
      "https://private-us-east-1.manuscdn.com/sessionFile/mimfcLv8DY6bMbUSipActj/sandbox/WyfJK2Kysy7crx0PG4gGPW-img-4_1771071311000_na1fn_c2VydmljZXMtY2xpbWF0aXNhdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbWltZmNMdjhEWTZiTWJVU2lwQWN0ai9zYW5kYm94L1d5ZkpLMkt5c3k3Y3J4MFBHNGdHUFctaW1nLTRfMTc3MTA3MTMxMTAwMF9uYTFmbl9jMlZ5ZG1salpYTXRZMnhwYldGMGFYTmhkR2x2YmcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=LXaI~Sa14l-CU61Z71epEq9~u96t6p~DmAnSe~bWqjFRJBBns5S4FkkPW09FKnLazgdUTbkgizGSy0JRTA589cQ-uthiyjX9OCsUIEMY45ufOGJS3SAVWlVdpo-JTq3o9X~3vGsT~OBHqCqrcuq~7ib8LmzbOjIITDrx2cQVi3DyXnxr~d~QPxmdC4JMgTwTabEaT3uE1iMb3mxRHEpglAb1PjINU8ayv5oechTQoDKshpNddFpATVp91JpIKSFSnv8y5rKhj4NDto~ubasKAYwR8lbb1TDHwOlyd-KQyuvFupTlnFZ25vkb71Uk2wniCGE0b3tAcV0TZTFYAVv4UA__",
  },
  {
    id: 5,
    title: "Électricité Industrielle",
    description:
      "Solutions électriques complètes pour les installations industrielles et les gros équipements.",
    icon: Wrench,
    image:
      "https://private-us-east-1.manuscdn.com/sessionFile/mimfcLv8DY6bMbUSipActj/sandbox/WyfJK2Kysy7crx0PG4gGPW-img-5_1771071313000_na1fn_c2VydmljZXMtZWxlY3RyaWNpdGU.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbWltZmNMdjhEWTZiTWJVU2lwQWN0ai9zYW5kYm94L1d5ZkpLMkt5c3k3Y3J4MFBHNGdHUFctaW1nLTVfMTc3MTA3MTMxMzAwMF9uYTFmbl9jMlZ5ZG1salpYTXRaV3hsWTNSeWFXTnBkR1UucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=q4keeFHoi1XkHN-jaxrLVJUSvG6w85cB3nDKTXoLTqpy0aEhmY3P3GkQDyXsn3Z9XuHZK0dsrsR1FisK50ovu-gG6EvM0gnxAmANX6-ydprhhBdQTk7ClZVzLp-RGCD9UsiGK0hzItG4i~gHLQgV3VEiIj4JrnkNalP7FjJ88fh15QLIswAZkL9g~l2ElBoTDqRJGk2Xgdikq1rEQyzSb72Pp3GgwK4RcKCJRbVulmfweKaIf2DNqa4M1PL4-gT6QWcaETFAkP~QZlHEPUKQNXEPusEh5tGBqDPE5i~p02dg7o6sGXhrWzYogrmRfbdOifHlCq501I~p8lp1zNcvaw__",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins">
            Nos Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Découvrez l'ensemble de nos solutions professionnelles adaptées à vos besoins
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30 cursor-pointer"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden bg-secondary">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <IconComponent className="w-8 h-8 text-primary flex-shrink-0" />
                  </div>
                  <CardTitle className="text-xl font-poppins text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-base text-muted-foreground font-inter">
                    {service.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Line */}
                <div className="h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
