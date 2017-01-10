/*
The MIT License (MIT)

Copyright (c) 2017 Mtech Access Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

/* jshint jasmine: true */
/* global ContextMenuState */

exports.defineAutoTests = function() {
  describe("ContextMenuState", function() {
    it("contextMenuState.spec.1 should exist", function() {
      expect(window.ContextMenuState).toBeDefined();
    });

    it("contextMenuState.spec.2 should have setVisible method", function() {
      expect(window.ContextMenuState.setVisible).toBeDefined();
      expect(typeof window.ContextMenuState.setVisible).toBe("function");
    });

    it("contextMenuState.spec.3 should have isVisible property", function() {
      expect(window.ContextMenuState.isVisible).toBeDefined();
      expect(typeof window.ContextMenuState.isVisible).toBe("property");
    });
  });
};