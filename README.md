# Techniconsole

A set of easy-to-use `console.log` alternatives for clearer code demonstrations.


# What's Wrong With `console.log`?

I mean... everything, right?

1. It tends to blend in with the terminal's info-dump, making it difficult to find. More like `console.needleInAHaystack`, amirite?
2. If you care about the other information in the terminal, well, that becomes harder to parse as well.
3. Once you have even a few of them, you get a new parsing task as well: telling one from the other.

But even though there are many better tools for debugging our code, we still reach for `console.log` way more than we should, and _if_ we're going to do that, let's at least make our logging less bad, yeah?

This is moderately easy to do with libraries like [colors](https://www.npmjs.com/package/colors) and [boxen](https://www.npmjs.com/package/boxen), but they're designed (and designed well!) to be used as permanent solutions within a CLI app, and are thus a bit burdensome to set up just to log something quickly and get out.

So that's what Techniconsole is for. Log the results of code in an easily-parsed, expressive way, so that you can get the info you need without losing everything else. Then you can delete your log and get right back to work.

It's also great for showing results of code to others!


# Techniconsole Design Principles

Techniconsole is a set of `console.log`-style methods specifically designed to produce a clear signal in a noisy console world. It achieves this through three basic design principles:

  1. Solve actual problems. e.g., labelling what value you're logging is an annoying task and an unnecessary pain point.
  2. Use style and formatting in a way that complements the purpose of each use-case. e.g., if you're marking a section of your logs with a header, it should be absolutely unmissable.
  3. Require no set-up. There is no configuration needed or, for the most part, possible. This is a highly opinionated set of methods for displaying the results of code, and we've developed it so that _you_ don't have to waste your time re-inventing or even tinkering with the logging wheel. (Like... we did.)


# Techniconsole Installation

In the working directory of an `npm`-controlled project: 

```bash
npm install techniconsole
```

# Techniconsole Methods
  
### label

The only method fully implemented so far, `label` takes in an object and logs the keys as labels for the values.

![a screenshot of the `label` method in action](./assets/screenshots/label-1.png)

The object that `label` takes in can have more than one property, meaning you can log several key/value pairs in one call.

![a screenshot of the two values in keys of one object passed into `label`](./assets/screenshots/label-2.png)

A common pattern is to `label` several things in a succinct way using object property shorthands

![a screenshot of one object being passed into `label` with object property shorthand syntax](./assets/screenshots/label-3.png)


### asBanner

**Still Under Construction**

A beautiful console banner, coming soon to an `npm` library near you. It will feature:

1. Full-width. Spans (as close as we can) the entire width of the terminal window.
2. Neon colors. You will _not_ scroll by it.
3. Centered text.
4. Wrapping without breaking words.
5. Simple manual row configuration--pass in multiple strings, and each string will be its own row.


### atTop

**Still Under Construction**

A simple method that will clear all logging above it so that the new value appears on top. Great for temporarily highlighting one value, with a built-in reminder of _why_ you're not seeing other logs.


### On Variable Names And Clarity
 
Did you know that you can use any name for a library you DW please? It's _your_ variable, no one else's! (You probably already knew this; if you didn't, it's time for a TIL tweet!)

![a screenshot of various names you could give the variable you create when you `require` Techniconsole](./assets/screenshots/require-names.png)

Did you know that we have _opinions_ about which you should use? We do! They're already in order of preference, from worst to best, but allow us to tell you our reasoning, and then... you do you, my friend. You do you.

1. `bob` - "Hahahahahaha, they named it something _silly_. Now... uh... what does it do again? How do I use this?" What you gain in a one-time laugh you lose in usability ten-fold.
* `console` - There's an argument for this--to the point where we're constantly considering whether we should wrap the native console object so your `console.log`s get converted to ours!--but ultimately, this library _isn't_ a drop-in replacement for `console`. Treating it as such can easily lead to a lack of clarity of where one starts and the other ends.
* `tc` - A nice short variable name, but it makes it hard for anyone seeing your code to easily grok what it does. If you've ever come back to your own code after a while, you know it's easy to forget such things yourself! Plus... you really don't need short variable names if you're using tab-completion. Are you using tab-completion? You really should be using tab-completion!
* `techniconsole` - An excellent name indeed! Whoever thought of it must be very, _very_ handsome.
* `tonsole` - We might mildly prefer this one. It's catchy--the greatest tragedy of our time is that [an excellent library](https://www.npmjs.com/package/tonsole) already grabbed the package name--, plus it quickly reads as a `console` alternative.

Forge your own destiny!

### Roadmaps For Future Versions

*1.0*

* [ ] Has all three basic planned methods (with a name change for `label` to `withLabel` to match new naming convention).
* [ ] Allow an arbitrary number of arguments for `asBanner` and `atTop`.


*1.1*

* [ ] Create composable versions, so that one could have a banner or labelled value on top, or a labelled value inside a banner.
* [ ] Convert style and layout to work within a browser console.


### Contributing

No formal system yet, but we're open to suggestions on this project, as well as assistance setting up a formal system for accepting contributions.
