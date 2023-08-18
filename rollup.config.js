import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import { terser } from "rollup-plugin-terser";
import polyfillNode from 'rollup-plugin-polyfill-node';

export default {
  input: 'src/index.ts',
  
  output: [
    {
      file: 'dist/qr-auth-lib.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/qr-auth-lib.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/qr-auth-lib.min.js',
      format: 'iife',
      name: 'QRAuthLib',
      plugins: [terser()]
    }
  ],
  plugins: [
    polyfillNode(),
    typescript({
        sourceMap: true,
    }),
    json(),
    resolve(),
    commonjs(),
    // Add terser only if you want to minify your bundles
    terser()
  ]
}
