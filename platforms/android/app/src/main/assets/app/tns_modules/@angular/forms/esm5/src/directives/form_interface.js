/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybV9pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9mb3JtX2ludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1Hcm91cH0gZnJvbSAnLi4vbW9kZWwnO1xuXG5pbXBvcnQge0Fic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0X2Zvcm1fZ3JvdXBfZGlyZWN0aXZlJztcbmltcG9ydCB7TmdDb250cm9sfSBmcm9tICcuL25nX2NvbnRyb2wnO1xuXG5cblxuLyoqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFuIGludGVyZmFjZSBpbXBsZW1lbnRlZCBieSBgRm9ybUdyb3VwRGlyZWN0aXZlYCBhbmQgYE5nRm9ybWAgZGlyZWN0aXZlcy5cbiAqXG4gKiBPbmx5IHVzZWQgYnkgdGhlIGBSZWFjdGl2ZUZvcm1zTW9kdWxlYCBhbmQgYEZvcm1zTW9kdWxlYC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybSB7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogQWRkIGEgY29udHJvbCB0byB0aGlzIGZvcm0uXG4gICAqXG4gICAqIEBwYXJhbSBkaXIgVGhlIGNvbnRyb2wgZGlyZWN0aXZlIHRvIGFkZCB0byB0aGUgZm9ybS5cbiAgICovXG4gIGFkZENvbnRyb2woZGlyOiBOZ0NvbnRyb2wpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmVtb3ZlIGEgY29udHJvbCBmcm9tIHRoaXMgZm9ybS5cbiAgICpcbiAgICogQHBhcmFtIGRpcjogVGhlIGNvbnRyb2wgZGlyZWN0aXZlIHRvIHJlbW92ZSBmcm9tIHRoZSBmb3JtLlxuICAgKi9cbiAgcmVtb3ZlQ29udHJvbChkaXI6IE5nQ29udHJvbCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBUaGUgY29udHJvbCBkaXJlY3RpdmUgZnJvbSB3aGljaCB0byBnZXQgdGhlIGBGb3JtQ29udHJvbGAuXG4gICAqXG4gICAqIEBwYXJhbSBkaXI6IFRoZSBjb250cm9sIGRpcmVjdGl2ZS5cbiAgICovXG4gIGdldENvbnRyb2woZGlyOiBOZ0NvbnRyb2wpOiBGb3JtQ29udHJvbDtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIEFkZCBhIGdyb3VwIG9mIGNvbnRyb2xzIHRvIHRoaXMgZm9ybS5cbiAgICpcbiAgICogQHBhcmFtIGRpcjogVGhlIGNvbnRyb2wgZ3JvdXAgZGlyZWN0aXZlIHRvIGFkZC5cbiAgICovXG4gIGFkZEZvcm1Hcm91cChkaXI6IEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlKTogdm9pZDtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFJlbW92ZSBhIGdyb3VwIG9mIGNvbnRyb2xzIHRvIHRoaXMgZm9ybS5cbiAgICpcbiAgICogQHBhcmFtIGRpcjogVGhlIGNvbnRyb2wgZ3JvdXAgZGlyZWN0aXZlIHRvIHJlbW92ZS5cbiAgICovXG4gIHJlbW92ZUZvcm1Hcm91cChkaXI6IEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlKTogdm9pZDtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFRoZSBgRm9ybUdyb3VwYCBhc3NvY2lhdGVkIHdpdGggYSBwYXJ0aWN1bGFyIGBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZWAuXG4gICAqXG4gICAqIEBwYXJhbSBkaXI6IFRoZSBmb3JtIGdyb3VwIGRpcmVjdGl2ZSBmcm9tIHdoaWNoIHRvIGdldCB0aGUgYEZvcm1Hcm91cGAuXG4gICAqL1xuICBnZXRGb3JtR3JvdXAoZGlyOiBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSk6IEZvcm1Hcm91cDtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFVwZGF0ZSB0aGUgbW9kZWwgZm9yIGEgcGFydGljdWxhciBjb250cm9sIHdpdGggYSBuZXcgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSBkaXI6IFRoZSBjb250cm9sIGRpcmVjdGl2ZSB0byB1cGRhdGUuXG4gICAqIEBwYXJhbSB2YWx1ZTogVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGNvbnRyb2wuXG4gICAqL1xuICB1cGRhdGVNb2RlbChkaXI6IE5nQ29udHJvbCwgdmFsdWU6IGFueSk6IHZvaWQ7XG59XG4iXX0=