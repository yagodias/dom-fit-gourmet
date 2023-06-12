(() => {
var exports = {};
exports.id = 229;
exports.ids = [229];
exports.modules = {

/***/ 71:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ home)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "@mui/material"
const material_namespaceObject = require("@mui/material");
;// CONCATENATED MODULE: external "@mui/icons-material/Reorder"
const Reorder_namespaceObject = require("@mui/icons-material/Reorder");
var Reorder_default = /*#__PURE__*/__webpack_require__.n(Reorder_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/useMediaQuery"
const useMediaQuery_namespaceObject = require("@mui/material/useMediaQuery");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ExpandMore"
const ExpandMore_namespaceObject = require("@mui/icons-material/ExpandMore");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_namespaceObject);
;// CONCATENATED MODULE: ./src/components/WrapBenefits/index.js




const WrapBenefits = ()=>{
    const benefits = [
        {
            title: "Baixo teor de gordura",
            description: "O frango grelhado \xe9 uma op\xe7\xe3o com baixo teor de gordura em compara\xe7\xe3o com outras carnes."
        },
        {
            title: "Rico em prote\xednas",
            description: "O frango \xe9 uma excelente fonte de prote\xedna magra, essencial para a constru\xe7\xe3o muscular e manuten\xe7\xe3o do tecido."
        },
        {
            title: "F\xe1cil digest\xe3o",
            description: "O frango grelhado \xe9 leve e de f\xe1cil digest\xe3o, tornando-o uma op\xe7\xe3o ideal para pessoas com est\xf4magos sens\xedveis."
        },
        {
            title: "Fonte de vitaminas e minerais",
            description: "O frango cont\xe9m uma variedade de vitaminas e minerais essenciais, como vitamina B, vitamina D e zinco."
        },
        {
            title: "Versatilidade",
            description: "Wraps de frango grelhado oferecem uma maneira vers\xe1til de desfrutar do sabor do frango com diferentes ingredientes e molhos."
        },
        {
            title: "Op\xe7\xe3o saud\xe1vel",
            description: "Ao optar por frango grelhado, voc\xea reduz o consumo de gorduras saturadas encontradas em carnes fritas ou processadas."
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Box, {
        sx: {
            marginTop: 40,
            marginBottom: 10
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_namespaceObject.Box, {
            sx: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_namespaceObject.Card, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.CardMedia, {
                            component: "img",
                            height: "400",
                            image: "https://res.cloudinary.com/darkpuzzle/image/upload/v1686111976/wrap-de-frango-grelhado_nbsl4b.png",
                            alt: "Healthy Food 2"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_namespaceObject.CardContent, {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Typography, {
                                    variant: "h6",
                                    component: "div",
                                    children: "Principais benef\xedcios de comer wrap de frango grelhado:"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Typography, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    children: "Um wrap recheado com frango grelhado suculento e vegetais frescos. Rico em prote\xednas e sabor!"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.List, {
                    children: benefits.map((benefit, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(material_namespaceObject.Accordion, {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.AccordionSummary, {
                                    expandIcon: /*#__PURE__*/ jsx_runtime.jsx((ExpandMore_default()), {}),
                                    "aria-controls": "panel1a-content",
                                    id: "panel1a-header",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Typography, {
                                        children: benefit?.title
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.AccordionDetails, {
                                    children: /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Typography, {
                                        children: benefit?.description
                                    })
                                })
                            ]
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ const components_WrapBenefits = (WrapBenefits);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(81);
;// CONCATENATED MODULE: ./src/pages/home/index.js







const HomePage = ()=>{
    const [openMenu, setOpenMenu] = (0,external_react_.useState)(null);
    const isMobile = useMediaQuery_default()("(max-width: 768px)");
    const open = Boolean(openMenu);
    const handleClick = (event)=>{
        setOpenMenu(event.currentTarget);
    };
    const handleClose = ()=>{
        setOpenMenu(null);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "backgroundImage",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.AppBar, {
                position: "static",
                style: {
                    backgroundColor: "#e3a22e"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_namespaceObject.Toolbar, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            alt: "Dom Fit Logo",
                            width: "50px",
                            height: "50px",
                            src: "https://res.cloudinary.com/darkpuzzle/image/upload/v1686424796/dom-fit-logo-modifed_la7gtp.png"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Typography, {
                            variant: "h6",
                            component: "div",
                            sx: {
                                flexGrow: 1,
                                marginLeft: 1
                            },
                            children: "Dom Fit Delivery"
                        }),
                        isMobile ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Button, {
                                    "aria-controls": open ? "basic-menu" : undefined,
                                    "aria-haspopup": "true",
                                    "aria-expanded": open ? "true" : undefined,
                                    color: "inherit",
                                    onClick: handleClick,
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Reorder_default()), {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_namespaceObject.Menu, {
                                    open: open,
                                    anchorEl: openMenu,
                                    onClose: handleClose,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_namespaceObject.MenuItem, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Avatar, {
                                                    sx: {
                                                        width: 32,
                                                        height: 32,
                                                        mr: 1
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Typography, {
                                                    children: "Meu Perfil"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.MenuItem, {
                                            children: "Pedido"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.MenuItem, {
                                            children: "Sobre n\xf3s"
                                        })
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Button, {
                                    color: "inherit",
                                    sx: {
                                        backgroundColor: "#b07d23"
                                    },
                                    children: "Pedido"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Button, {
                                    color: "inherit",
                                    sx: {
                                        backgroundColor: "#b07d23",
                                        marginLeft: 1
                                    },
                                    children: "Sobre"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_namespaceObject.Button, {
                                    color: "inherit",
                                    sx: {
                                        backgroundColor: "#b07d23",
                                        marginLeft: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Avatar, {
                                            sx: {
                                                width: 32,
                                                height: 32,
                                                mr: 1
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Typography, {
                                            children: "Meu Perfil"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_namespaceObject.Container, {
                sx: {
                    mt: 4
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Typography, {
                        variant: "h4",
                        component: "h1",
                        align: "center",
                        sx: {
                            mb: 4,
                            color: "#282c10"
                        },
                        children: "Bem-vindo \xe0 Dom Fit Delivery"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_namespaceObject.Grid, {
                        container: true,
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Grid, {
                                item: true,
                                xs: 12,
                                sm: 6,
                                md: 4,
                                children: /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.CardActionArea, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_namespaceObject.Card, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.CardMedia, {
                                                component: "img",
                                                height: "200",
                                                image: "https://res.cloudinary.com/darkpuzzle/image/upload/v1686111790/salada-verao_nbxehf.avif",
                                                alt: "Healthy Food 2"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_namespaceObject.CardContent, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Typography, {
                                                        variant: "h6",
                                                        component: "div",
                                                        children: "Salada de Ver\xe3o"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Typography, {
                                                        variant: "body2",
                                                        color: "text.secondary",
                                                        children: "Uma salada refrescante com ingredientes frescos e saud\xe1veis. Perfeita para os dias quentes!"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Grid, {
                                item: true,
                                xs: 12,
                                sm: 6,
                                md: 4,
                                children: /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.CardActionArea, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_namespaceObject.Card, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.CardMedia, {
                                                component: "img",
                                                height: "200",
                                                image: "https://res.cloudinary.com/darkpuzzle/image/upload/v1686111976/wrap-de-frango-grelhado_nbsl4b.png",
                                                alt: "Healthy Food 2"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_namespaceObject.CardContent, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Typography, {
                                                        variant: "h6",
                                                        component: "div",
                                                        children: "Wrap de Frango Grelhado"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Typography, {
                                                        variant: "body2",
                                                        color: "text.secondary",
                                                        children: "Um wrap recheado com frango grelhado suculento e vegetais frescos. Rico em prote\xednas e sabor!"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Grid, {
                                item: true,
                                xs: 12,
                                sm: 6,
                                md: 4,
                                children: /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.CardActionArea, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_namespaceObject.Card, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.CardMedia, {
                                                component: "img",
                                                height: "200",
                                                image: "https://res.cloudinary.com/darkpuzzle/image/upload/v1686112054/smoothie-de-frutas-vermelhas_uvjfrb.jpg",
                                                alt: "Healthy Food 3"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_namespaceObject.CardContent, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Typography, {
                                                        variant: "h6",
                                                        component: "div",
                                                        children: "Smoothie Energ\xe9tico"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Typography, {
                                                        variant: "body2",
                                                        color: "text.secondary",
                                                        children: "Um smoothie nutritivo e energizante, feito com frutas frescas e ingredientes saud\xe1veis. Perfeito para um lanche r\xe1pido!"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(components_WrapBenefits, {})
        ]
    });
};
/* harmony default export */ const home = (HomePage);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fhome&absolutePagePath=private-next-pages%2Fhome%2Findex.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 81:
/***/ (() => {



/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(71)));
module.exports = __webpack_exports__;

})();