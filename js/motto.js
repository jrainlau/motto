/**
 * Author: Jrain Lau
 * E-mail: jrainlau@163.com
 * Version: 0.0.1
 */
;(function (window, document, undefined) {
'use strict'

/**
 * Construct a new Motto instance by passing the configuration object
 *
 * @param {String / HTMLElement}  el
 * @param {Object}                config
 */
var Motto = function (el, config) {
  this.el = document.querySelectorAll(el)[0]
  this.config = config || {}
  this.lyric = config.lyric || ''
  this.newLyric = ''
  this.showUpSpeed = config.showUpSpeed || 0
  this.flashSpeed = config.flashSpeed || 0
  this.flashTimeout = config.flashTimeout || 0

  this.showOut()
}

Motto.prototype = {
  showOut: function () {
    var self = this,
        i = 0,
        _lyric,
        _word = ''
    if (self.flashSpeed) {
      self.newLyric = _lyric = self.replaceFun(self.lyric, self.lyric.split(''))
    } else {
      self.newLyric = _lyric = self.lyric
    }
    
    if (self.showUpSpeed) {
      var timer = setInterval(function() {
        _word += _lyric.split('')[i]
        i++
        self.newLyric = _word
        self.el.innerHTML = _word

        self.el.dataset.text = _word

        if (self.lyric.split('').length === i) {
          clearInterval(timer)
          setTimeout(function () {
            self.flash(self.newLyric)
          }, self.flashTimeout)
        }
      }, self.showUpSpeed)
    } else {
      self.el.innerHTML = _lyric

      self.el.dataset.text = _lyric

      setTimeout(function () {
        self.flash(self.newLyric)
      }, self.flashTimeout)
    }
  },

  /**
   * Translate the text into messy code
   *
   * @param {String}  text
   * @param {Array}   repaceArr
   */
  replaceFun: function (text, replaceArr) {
    return text.split('').map(function (item) {
      var newArr = replaceArr.filter(function (item, index) {
        return replaceArr.indexOf(item) == index
      })
      return item = newArr[Math.floor((Math.random() * newArr.length))]
    }).join('')
  },

  flash: function () {
    var self = this,
        _lyric = self.lyric.split(''),
        _newLyric = self.newLyric.split(''),
        _flashSpeed = self.flashSpeed
    var timer = setInterval(function () {
        if (_newLyric.join('') !== _lyric.join('')) {
          for (var i in _lyric) {
            if (_newLyric[i] !== _lyric[i]) {
              var _lyricUnique = _lyric.filter(function (item, index) {
                return _lyric.indexOf(item) == index
              })
              _newLyric[i] = _lyricUnique[Math.floor((Math.random() * _lyricUnique.length))]
              self.el.innerHTML = self.el.dataset.text =_newLyric.join('')
            }
          }
        } else {
          clearInterval(timer)
          self.callback()
        }
    }, _flashSpeed)
  },

  callback: function () {
    if (this.config.callback) {
      this.config.callback()
    }
  }
}

if (typeof module === 'object' && typeof module.exports === 'object') {
    // CommonJS
    module.exports = exports = Motto

} else if (typeof define === 'function' && define.amd) {
    // AMD support
    define(function () {
        return Motto
    })

} else if (typeof window === 'object') {
    // Normal way
    window.Motto = Motto
}

})(window, document)