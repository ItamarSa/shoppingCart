import { utilService } from "./util.service";

const STORAGE_KEY = 'productDB'

export const productService={
    query,
    getById,
    save,
    remove,
    getDemoProduct,
    
}



async function query(filterBy = {}) {
    // return httpService.get(BASE_URL, filterBy);

    let productToDisplay = [...products];

    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i');
        productToDisplay = productToDisplay.filter((product) => {
            return (
                product.title.match(regex) || // Match by title
                product.tags.some((tag) => tag.match(regex)) // Match by tags
            );
        });
    }

    if (filterBy.price) {
        productToDisplay = productToDisplay.filter((product) => product.price <= filterBy.price);
    }

    if (filterBy.tags && filterBy.tags.length > 0) {
        productToDisplay = productToDisplay.filter((product) => {
            return product.tags.some((tag) => filterBy.tags.includes(tag));
        });
    }
    if (filterBy.userId) {
        productToDisplay = productToDisplay.filter((product) => product.owner._id === filterBy.userId);
    }
    if (filterBy.buyerId) {
        orders = orders.filter((order) => order.buyer._id === filterBy.buyerId);
        }


    return productToDisplay;
}

function getById(productId) {
    return storageService.get(STORAGE_KEY, productId)
}
async function remove(productId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, productId)
}
async function save(product) {
    var savedProduct
    if (product._id) {
        savedProduct = await storageService.put(STORAGE_KEY, product)
    } else {
        // Later, owner is set by the backend
        product.owner = userService.getLoggedinUser()
        savedProduct = await storageService.post(STORAGE_KEY, product)
    }
    return savedProduct
}
function getDemoProduct() {
    return {
        imgUrl: getImgs(),
        name: utilService.makeLorem(1),
        title: utilService.makeLorem(5),
        price: utilService.getRandomIntInclusive(100, 300),
        rate: parseFloat((utilService.getRandomIntInclusive(20, 50) * 0.1).toPrecision(2)),
        createdAt: utilService.formatDateForTimeAgo(new Date()),
        tags: utilService.makeTag(1),
        // inStock: utilService.randomTrueFalse(),
        // icon: utilService.makeImage()
    }
}
function getEmptyProduct() {
    return {
        imgUrl: [],
        name: '',
        title: '',
        price: '',
        tags:utilService.makeTag(1),
        rate: parseFloat((utilService.getRandomIntInclusive(20, 50) * 0.1).toPrecision(2)),
        createdAt: (Date.now()),
        tags: utilService.makeTag(1),
    }
}
function getProductTags() {
    return tags
}