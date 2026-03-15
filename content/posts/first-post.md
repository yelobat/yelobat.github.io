+++
title = "Experimenting with Guile Scheme + C."
author = ["yelobat"]
date = 2026-03-14
draft = true
+++

[Guile Scheme](<https://www.gnu.org/software/guile/>) is a language developed by
[The GNU Project](<https://www.gnu.org/>). It is a programming language that I
have become more and more interested in as I have worked on various projects
over the past couple of months.

Applications that are controllable via a Lisp-like language are fun to use,
so Guile allowing for C applications to expose an API to Guile is a cool idea.
If you are wondering what kind of applications I have in mind when I say this,
the most popular example of this is Emacs. There is a huge interest to make
applications that are similar to Emacs, but allow for editing other kinds of
media such as images and video.

Let's look at some cool things we can do with Guile, and how we can integrate
it into C applications to do some cool stuff.


## Writing Guile Scheme {#writing-guile-scheme}

Let's first look at some Guile Scheme code and look at what kind of language
we are dealing with:

```text
(define (factorial n) (if (= n 1) n (* n (factorial (- n 1)))))
(factorial 5) ; => 120
```
