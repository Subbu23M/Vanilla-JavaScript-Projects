/// <reference path="../typings/globals/jquery/index.d.ts" />

// jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

// Basic Syntax

// $(document).ready(function(){
//     Block of code goes here
// })

// Array of objects

let quotes = [

    {
        "quote" :"Be yourself; everyone else is already taken",
        "author":"Oscar Wilde"
    },

    {
        "quote" :"A room without books is like a body without a soul",
        "author": " Marcus Tullius Cicero"
    },

    {
        "quote" :"Be the change that you wish to see in the world.",
        "author":"Mahatma Gandhi"
    },

    {
        "quote" :"If you tell the truth, you don't have to remember anything",
        "author":"Mark Twain"
    },

    {
        "quote": "A friend is someone who knows all about you and still loves you.",
        "author" : "Elbert Hubbard"
    },

    {
        "quote": "So many books, so little time.",
        "author" : " Frank Zappa"
    },

    {
        "quote": "You only live once, but if you do it right, once is enough.",
        "author" : "Mae West"
    },

    {
        "quote":"The way to get started is to quit talking and begin doing.",
        "author":"Walt Disney"
    },

    {
        "quote":"Life is what happens when you're busy making other plans",
        "author":"John Lennon"
    },

    {
        "quote":"Whoever is happy will make others happy too",
        "author":"Anne Frank"
    }

];

console.log(quotes.length);

// Select the elements

const $btn = $('.btn');
console.log($btn);

$btn.click(function(){

    let number = Math.floor(Math.random() * quotes.length)
    console.log(number);

    $('.quote').html(quotes[number].quote);

    $('.author').html('<span>---</span>' + quotes[number].author);

});