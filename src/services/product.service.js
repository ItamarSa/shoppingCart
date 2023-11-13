import { storageService } from "./async-storage.service";
import { utilService } from "./util.service";

const STORAGE_KEY = 'productDB'

export const productService = {
    query,
    getById,
    save,
    remove,
    getDemoProduct,
    getImgs

}
const productImages = [
   
  
    ['https://picsum.photos/550/370?random=${1}', 'https://picsum.photos/550/370?random=${2}', 'https://picsum.photos/550/370?random=${3}', 'https://picsum.photos/550/370?random=${4}'],
    ['https://picsum.photos/550/370?random=${12}', 'https://picsum.photos/550/370?random=${21}', 'https://picsum.photos/550/370?random=${31}', 'https://picsum.photos/550/370?random=${41}'],
    ['https://picsum.photos/550/370?random=${13}', 'https://picsum.photos/550/370?random=${22}', 'https://picsum.photos/550/370?random=${32}', 'https://picsum.photos/550/370?random=${42}'],
    ['https://picsum.photos/550/370?random=${14}', 'https://picsum.photos/550/370?random=${23}', 'https://picsum.photos/550/370?random=${33}', 'https://picsum.photos/550/370?random=${43}'],
    ['https://picsum.photos/550/370?random=${15}', 'https://picsum.photos/550/370?random=${24}', 'https://picsum.photos/550/370?random=${34}', 'https://picsum.photos/550/370?random=${44}'],
    ['https://picsum.photos/550/370?random=${16}', 'https://picsum.photos/550/370?random=${25}', 'https://picsum.photos/550/370?random=${35}', 'https://picsum.photos/550/370?random=${45}'],
    ['https://picsum.photos/550/370?random=${17}', 'https://picsum.photos/550/370?random=${26}', 'https://picsum.photos/550/370?random=${36}', 'https://picsum.photos/550/370?random=${46}'],
    ['https://picsum.photos/550/370?random=${18}', 'https://picsum.photos/550/370?random=${27}', 'https://picsum.photos/550/370?random=${37}', 'https://picsum.photos/550/370?random=${47}'],
    ['https://picsum.photos/550/370?random=${19}', 'https://picsum.photos/550/370?random=${28}', 'https://picsum.photos/550/370?random=${38}', 'https://picsum.photos/550/370?random=${48}'],
    ['https://picsum.photos/550/370?random=${10}', 'https://picsum.photos/550/370?random=${29}', 'https://picsum.photos/550/370?random=${39}', 'https://picsum.photos/550/370?random=${49}'],
    ['https://picsum.photos/550/370?random=${11}', 'https://picsum.photos/550/370?random=${20}', 'https://picsum.photos/550/370?random=${30}', 'https://picsum.photos/550/370?random=${40}'],


]


// return httpService.get(BASE_URL, filterBy);
async function query() {
    var products = await storageService.query(STORAGE_KEY)
    return products

    // let productToDisplay = [...products];

    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i');
    //     productToDisplay = productToDisplay.filter((product) => {
    //         return (
    //             product.title.match(regex) || // Match by title
    //             product.tags.some((tag) => tag.match(regex)) // Match by tags
    //         );
    //     });
    // }

    // if (filterBy.price) {
    //     productToDisplay = productToDisplay.filter((product) => product.price <= filterBy.price);
    // }

    // if (filterBy.tags && filterBy.tags.length > 0) {
    //     productToDisplay = productToDisplay.filter((product) => {
    //         return product.tags.some((tag) => filterBy.tags.includes(tag));
    //     });
    // }
    // if (filterBy.userId) {
    //     productToDisplay = productToDisplay.filter((product) => product.owner._id === filterBy.userId);
    // }
    // if (filterBy.buyerId) {
    //     orders = orders.filter((order) => order.buyer._id === filterBy.buyerId);
    //     }


    // return productToDisplay;
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
        // product.owner = userService.getLoggedinUser()
        savedProduct = await storageService.post(STORAGE_KEY, product)
    }
    return savedProduct
}
function getImgs() {

    return productImages[utilService.getRandomIntInclusive(0, 24)]
}
function getDemoProduct() {
    return {
        imgUrl: getImgs(1),
        // name: utilService.makeLorem(1),
        title: utilService.makeLorem(5),
        price: utilService.getRandomIntInclusive(100, 300),
        // rate: parseFloat((utilService.getRandomIntInclusive(20, 50) * 0.1).toPrecision(2)),
        // createdAt: utilService.formatDateForTimeAgo(new Date()),
        // tags: utilService.makeTag(1),
        // inStock: utilService.randomTrueFalse(),
        // icon: utilService.makeImage()
    }
}
function getEmptyProduct() {
    return {
        imgUrl: [],
        // name: '',
        title: '',
        price: '',
        // tags:utilService.makeTag(1),
        // rate: parseFloat((utilService.getRandomIntInclusive(20, 50) * 0.1).toPrecision(2)),
        // createdAt: (Date.now()),
        // tags: utilService.makeTag(1),
    }
}
function getProductTags() {
    return tags
}