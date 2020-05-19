import { Given } from 'cucumber';
const expect = require('chai').expect

import AmazonPage from '../../page_object/page_amazon';
import BestsellersPage from '../../page_object/page_bestsellers'
import GardenPage from '../../page_object/page_garden'
import ArticlePage from '../../page_object/page_article'
const timeout = 60000;

Given(/^un client avec 1 article dans son panier$/,  () => { 
    
    AmazonPage.open()
    expect(AmazonPage.get_nb_items_in_cart()).to.equal('0')
    AmazonPage.navigate_to_bestsellers()
    BestsellersPage.navigate_to_garden_category()
    GardenPage.select_first_item()
    ArticlePage.add_article_in_cart()
    expect(ArticlePage.get_nb_items_in_cart()).to.equal('1')
 });