export const HERO_SECTION = {
    cardProps: {
        title: "Welcome to Our Store",
        subtitle: "Discover amazing products at unbeatable prices",
        hoverable: true,
        className: "hero-card"
    },
    buttonProps: {
        type: "primary",
        size: "large",
        children: "Shop Now"
    },
    spaceProps: {
        direction: "vertical",
        size: "large",
        align: "center"
    }
};

export const CATEGORIES = {
    titleProps: {
        level: 2,
        className: "text-center",
        children: "Shop by Category"
    },
    items: [
        {
            cardProps: {
                hoverable: true,
                className: "category-card"
            },
            spaceProps: {
                direction: "vertical",
                size: "middle",
                align: "center"
            },
            icon: 'Code',
            titleProps: {
                level: 3,
                children: 'Electronics'
            }
        },
        {
            cardProps: {
                hoverable: true,
                className: "category-card"
            },
            spaceProps: {
                direction: "vertical",
                size: "middle",
                align: "center"
            },
            icon: 'User',
            titleProps: {
                level: 3,
                children: 'Fashion'
            }
        },
        {
            cardProps: {
                hoverable: true,
                className: "category-card"
            },
            spaceProps: {
                direction: "vertical",
                size: "middle",
                align: "center"
            },
            icon: 'Project',
            titleProps: {
                level: 3,
                children: 'Home & Kitchen'
            }
        },
        {
            cardProps: {
                hoverable: true,
                className: "category-card"
            },
            spaceProps: {
                direction: "vertical",
                size: "middle",
                align: "center"
            },
            icon: 'Trophy',
            titleProps: {
                level: 3,
                children: 'Beauty'
            }
        }
    ]
};

export const FEATURED_PRODUCTS = {
    titleProps: {
        level: 2,
        className: "text-center",
        children: "Featured Products"
    },
    items: [
        {
            id: 1,
            cardProps: {
                hoverable: true,
                className: "product-card"
            },
            spaceProps: {
                direction: "vertical",
                size: "middle",
                align: "center"
            },
            name: 'Product 1',
            price: '$99.99',
            isNew: true,
            buttonProps: {
                type: "primary",
                children: "Add to Cart"
            },
            tagProps: {
                color: "blue",
                children: "New"
            }
        },
        {
            id: 2,
            cardProps: {
                hoverable: true,
                className: "product-card"
            },
            spaceProps: {
                direction: "vertical",
                size: "middle",
                align: "center"
            },
            name: 'Product 2',
            price: '$149.99',
            isNew: true,
            buttonProps: {
                type: "primary",
                children: "Add to Cart"
            },
            tagProps: {
                color: "blue",
                children: "New"
            }
        },
        {
            id: 3,
            cardProps: {
                hoverable: true,
                className: "product-card"
            },
            spaceProps: {
                direction: "vertical",
                size: "middle",
                align: "center"
            },
            name: 'Product 3',
            price: '$79.99',
            isNew: false,
            buttonProps: {
                type: "primary",
                children: "Add to Cart"
            }
        },
        {
            id: 4,
            cardProps: {
                hoverable: true,
                className: "product-card"
            },
            spaceProps: {
                direction: "vertical",
                size: "middle",
                align: "center"
            },
            name: 'Product 4',
            price: '$199.99',
            isNew: true,
            buttonProps: {
                type: "primary",
                children: "Add to Cart"
            },
            tagProps: {
                color: "blue",
                children: "New"
            }
        }
    ]
};

export const NEWSLETTER = {
    cardProps: {
        title: "Subscribe to Our Newsletter",
        subtitle: "Get the latest updates on new products and special offers",
        className: "newsletter-card"
    },
    spaceProps: {
        direction: "vertical",
        size: "middle",
        align: "center"
    },
    inputProps: {
        type: "email",
        placeholder: "Enter your email"
    },
    buttonProps: {
        type: "primary",
        children: "Subscribe"
    }
}; 