/*
// Plugin Name: Smooth Scroll Window
// Description: Scroll window smoothly when clicked on anchor link using jQuery
// Version: 1.0.0
// Author: Shrikumar Infotech
// Author Email: dev@shrikumarinfotech.com
// Created Date: 05 November 2020
// License: https://opensource.org/licenses/MIT
// Copyright 2020, Shrikumar Infotech
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

'use strict';

(function( $ ){
    $.fn.smoothScrollWindow = function(){
        // Define page body with this
        const pageBody = this;
        // Define anchor links
        const anchorLinks = this.find('a');
        // Define dynamic variables
        let anchorId = '';
        let offsetValue = 0;
        let scrollOptions = {};
        // click function
        $(anchorLinks).each(function(index, element){
            // verify for anchor links(with hash #prefixed links)
            $(element).on('click', function( event ){
                // prevent default action on click
                event.preventDefault();
                // check for promise completion
                pageBody.promise().done(function(){
                    // get the a link hash value
                    anchorId = element.hash;
                    // get the element offset value
                    if(anchorId === ''){
                        // if empty(in case href="#"/top) set top to 0
                        offsetValue = {
                            top: 0
                        }
                    }
                    else{
                        // else get the element offset
                        offsetValue = $(pageBody).find(anchorId).offset();
                    }
                    // get the scrollOptions properties from offset
                    scrollOptions = {
                        top: offsetValue.top,
                        left: offsetValue.left,
                        behavior: 'smooth'
                    }
                    // scroll the page with scrollOptions
                    window.scrollTo(scrollOptions);
                });
            });
        });

        return this;
    }
}(jQuery));
