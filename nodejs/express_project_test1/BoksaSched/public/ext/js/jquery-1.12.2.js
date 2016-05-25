


























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































                                                (outerCache[ node.uniqueID ] = {});
                                            // Defend against cloned attroperties (jQuery gh-1709)
                                            // Support: IE <9 only
                                            break;
                                            outerCache = node[ expando ] || (node[ expando ] = {});
                                            uniqueCache = outerCache[ node.uniqueID ] ||
                                            uniqueCache[ type ] = [ dirruns, diff ];
                                        ++diff ) {
                                        .done( newDefer.resolve )
                                        .fail( newDefer.reject );
                                        .progress( newDefer.notify )
                                        // Cache the index of each encountered element
                                        fn ? [ returned ] : arguments
                                        if ( node === elem ) {
                                        if ( useCache ) {
                                        node.nodeName.toLowerCase() === name :
                                        node.nodeName.toLowerCase() === name :
                                        node.nodeType === 1 ) &&
                                        node.nodeType === 1 ) {
                                        return false;
                                        this === promise ? newDefer.promise() : this,
                                        }
                                        }
                                    (diff = nodeIndex = 0) || start.pop()) ) {
                                    (outerCache[ node.uniqueID ] = {});
                                    );
                                    .replace( rcleanScript, "" )
                                    // We normalize with Webkit giving an empty statusText
                                    break;
                                    conv = converters[ conv2 ];
                                    current = tmp[ 0 ];
                                    dataTypes.unshift( tmp[ 1 ] );
                                    if ( ( ofType ?
                                    if ( ofType ?
                                    list.push( arg );
                                    newDefer[ tuple[ 0 ] + "With" ](
                                    responses.text = xhr.responseText;
                                    returned.promise()
                                    status = 204;
                                    status = responses.text ? 200 : 404;
                                    statusText = "";
                                    statusText = xhr.statusText;
                                    uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
                                    xhr.abort();
                                    }
                                    }
                                !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
                                !option.disabled :
                                ( node.text || node.textContent || node.innerHTML || "" )
                                (diff = nodeIndex = 0) || start.pop()) ) {
                                (outerCache[ node.uniqueID ] = {});
                                // (#11426)
                                // (success with no data won't get notified, that's the best we
                                // ...in a gzip-friendly way
                                // Accessing binary-data responseText throws an exception
                                // can do given current implementations)
                                // Condense equivalence converters
                                // Defend against cloned attroperties (jQuery gh-1709)
                                // Fallback to seeking `elem` from the start
                                // Filter status for non standard behaviors
                                // Firefox throws an exception when accessing
                                // IE - #1450: sometimes returns 1223 when it should be 204
                                // If the request is local and we have data: assume a success
                                // Inspect recursively
                                // Lazy-add the new callback in a way that preserves old ones
                                // Otherwise, insert the intermediate dataType
                                // Reverse direction for :only-* (if we haven't yet done so)
                                // statusText for faulty cross-domain requests
                                // Support: IE <9 only
                                // Support: IE<10
                                // Use the same loop as above to seek `elem` from the start
                                // When found, cache indexes on `parent` and break
                                add( arg );
                                break;
                                cache = uniqueCache[ type ] || [];
                                converters[ "* " + tmp[ 0 ] ];
                                dataAttr( elem, name, data[ name ] );
                                diff = nodeIndex;
                                error: conv ? e : "No conversion from " + prev + " to " + current
                                if ( !options.unique || !self.has( arg ) ) {
                                if ( !status && options.isLocal && !options.crossDomain ) {
                                if ( conv === true ) {
                                if ( node.nodeType === 1 && ++diff && node === elem ) {
                                if ( returned && jQuery.isFunction( returned.promise ) ) {
                                if ( typeof xhr.responseText === "string" ) {
                                if ( xhr.readyState !== 4 ) {
                                jQuery( sel, this ).index( cur ) > -1 :
                                jQuery._evalUrl( node.src );
                                jQuery.event.remove( elem, type );
                                jQuery.find( sel, this, null, [ cur ] ).length;
                                jQuery.removeEvent( elem, type, data.handle );
                                name = jQuery.camelCase( name.slice( 5 ) );
                                node = elem;
                                node = elem;
                                nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
                                option.getAttribute( "disabled" ) === null ) &&
                                outerCache = node[ expando ] || (node[ expando ] = {});
                                responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
                                responses = {};
                                results.push( elem );
                                return results;
                                return true;
                                setMatched[i] = pop.call( results );
                                start = dir = type === "only" && !start && "nextSibling";
                                state: "parsererror",
                                status = xhr.status;
                                statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
                                this.attr( match, context[ match ] );
                                this[ match ]( context[ match ] );
                                try {
                                uniqueCache = outerCache[ node.uniqueID ] ||
                                var returned = fn && fn.apply( this, arguments );
                                while ( (node = ++nodeIndex && node && node[ dir ] ||
                                while ( (node = node[ dir ]) ) {
                                }
                                }
                                }
                                }
                                }
                                }
                                }
                                }
                                }
                                }
                                } catch ( e ) {
                                } else if ( converters[ conv2 ] !== true ) {
                                } else if ( status === 1223 ) {
                                } else {
                            !tbody.childNodes.length ) {
                            ( !option.parentNode.disabled ||
                            ( support.optDisabled ?
                            );
                            -1;
                            // ...and otherwise set as attributes
                            // ...in a gzip-friendly way
                            // A match means we're done; a fail means we have to keep checking
                            // Abort manually if needed
                            // Assign to newCache so results back-propagate to previous elements
                            // Clean up
                            // Defend against cloned attroperties (jQuery gh-1709)
                            // deferred[ done | fail | progress ] for forwarding actions to newDefer
                            // Don't return options that are disabled or in a disabled optgroup
                            // Execute the appropriate callbacks
                            // getElementById can match elements by name instead of ID
                            // http://javascript.nwbox.com/IEContentLoaded/
                            // If prev can be converted to accepted input
                            // Optional AJAX dependency, but won't run scripts if not present
                            // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                            // Properties of context are called as methods if possible
                            // Restore matcherIn since elem is not yet a final match
                            // Reuse newcache so results back-propagate to previous elements
                            // Seek `elem` from a previously-cached index
                            // Support: IE <9 only
                            // Support: IE, Opera, Webkit
                            // This is a shortcut to avoid jQuery.event.remove's overhead
                            // TODO: identify versions
                            // Use previously-cached element index if available
                            // Use the trick by Diego Perini
                            // Will be executed only in IE6
                            // xml :nth-child(...)
                            0 :
                            0;
                            break;
                            cache = uniqueCache[ type ] || [];
                            callback = undefined;
                            callback( 200, "success" );
                            complete( status, statusText, responses, xhr.getAllResponseHeaders() );
                            contains( context, elem ) &&
                            context.removeAttribute( "id" );
                            conv = converters[ prev + " " + tmp[ 0 ] ] ||
                            cur += clazz + " ";
                            cur = cur.replace( " " + clazz + " ", " " );
                            deferred[ tuple[ 1 ] ]( function() {
                            delete xhrCallbacks[ id ];
                            diff = nodeIndex && cache[ 2 ];
                            elem.id === m ) {
                            elem.innerHTML = value;
                            elem.removeAttribute( internalKey );
                            elem.removeChild( tbody );
                            elem[ internalKey ] = undefined;
                            elem[ propName ] = false;
                            event.preventDefault();
                            event.stopPropagation();
                            firingIndex--;
                            for ( code in map ) {
                            i = matched.length;
                            idx = indexOf( seed, matched[i] );
                            if ( !(unmatched[i] || setMatched[i]) ) {
                            if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
                            if ( conv ) {
                            if ( diff === false ) {
                            if ( elem.id === m ) {
                            if ( isAbort ) {
                            if ( jQuery._evalUrl ) {
                            if ( jQuery.isFunction( arg ) ) {
                            if ( jQuery.isFunction( this[ match ] ) ) {
                            if ( name.indexOf( "data-" ) === 0 ) {
                            if ( special[ type ] ) {
                            if ( useCache ) {
                            jQuery.cleanData( getAll( elem, false ) );
                            jQuery.event.simulate( "change", this.parentNode, event );
                            jQuery.globalEval(
                            jqXHR.always( map[ jqXHR.status ] );
                            matched = fn( seed, argument ),
                            matches.push( handleObj );
                            matches[ sel ] = handleObj.needsContext ?
                            name = attrs[ i ].name;
                            newContext.querySelectorAll( newSelector )
                            node = nodeIndex && parent.childNodes[ nodeIndex ];
                            node = parent;
                            nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
                            oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
                            option.scrollHeight;
                            option.selected = optionSet = true;
                            outerCache = node[ expando ] || (node[ expando ] = {});
                            response = conv( response );
                            responseHeaders = {};
                            results.push( elem );
                            results.push( elem );
                            return (newCache[ 2 ] = oldCache[ 2 ]);
                            return elem.getBoundingClientRect().left;
                            return getWidthOrHeight( elem, name, extra );
                            return results;
                            return results;
                            return rootjQuery.find( selector );
                            return true;
                            return true;
                            return value;
                            return window.setTimeout( doScrollCheck, 50 );
                            return {
                            script.parentNode.removeChild( script );
                            seed[ idx ] = !( matches[ idx ] = matched[i] );
                            seed[i] = !(matches[i] = elem);
                            temp.push( (matcherIn[i] = elem) );
                            this._justChanged = false;
                            this._justChanged = true;
                            tmp :
                            top.doScroll( "left" );
                            uniqueCache = outerCache[ node.uniqueID ] ||
                            uniqueCache[ dir ] = newCache;
                            var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
                            while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
                            while ( (node = ++nodeIndex && node && node[ dir ] ||
                            while ( dir ) {
                            xhr.onreadystatechange = jQuery.noop;
                            xhr.setRequestHeader( i, headers[ i ] + "" );
                            xhr[ i ] = options.xhrFields[ i ];
                            }
                            }
                            }
                            }
                            }
                            }
                            }
                            }
                            }
                            }
                            }
                            }
                            }
                            }
                            }
                            }
                            } );
                            } else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
                            } else {
                            } else {
                            } else {
                            };
                        !jQuery._data( node, "globalEval" ) &&
                        ( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
                        (temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
                        );
                        .done( updateFunc( i, resolveContexts, resolveValues ) )
                        .fail( deferred.reject );
                        .progress( updateFunc( i, progressContexts, progressValues ) )
                        //
                        // (IE6 & IE7) if it's in cache and has been
                        // :(first|last|only)-(child|of-type)
                        // Add to the list of active xhr callbacks
                        // Allow triggered, simulated change events (#11500)
                        // and execute any waiting functions
                        // by 3rd party polyfills/workarounds.
                        // by name instead of ID
                        // Call complete if needed
                        // Callback if not abort
                        // Defend against cloned attroperties (jQuery gh-1709)
                        // Dereference the script
                        // detach all dom ready events
                        // Don't conflict with Object.prototype properties (#13203)
                        // force reflow of newly added node in order to workaround delay
                        // from DOM nodes, so set to undefined instead
                        // Get the specific value for the option
                        // getElementById can match elements by name instead of ID
                        // Handle firing indexes
                        // Handle memory leak in IE
                        // Handle the case where IE and Opera return items
                        // https://code.google.com/p/chromium/issues/detail?id=378607
                        // IE creates expando attributes along with the property
                        // IE does not allow us to delete expando properties from nodes
                        // IE does not have a removeAttribute function on Document nodes
                        // IE's ActiveXObject throws a 'Type Mismatch' exception when setting
                        // IE<9 dies on focus/blur to hidden element (#1486,#12518)
                        // If conv2 outputs current
                        // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                        // If we error on focus to hidden element (#1486, #12518),
                        // If we're in sync mode we fire the callback
                        // Incorporate the offset, then check against cycle size
                        // Jump to end and forget the data so .add doesn't re-fire
                        // let .trigger() run the handlers
                        // Multi-Selects return an array
                        // non-xml :nth-child(...) stores cache data on `parent`
                        // of initialization properties
                        // only reproducible on winXP IE8 native, not IE9 in IE8 mode
                        // Otherwise, we inject the element directly into the jQuery object
                        // push.apply(_, arraylike) throws on ancient WebKit
                        // Register the callback, but delay it in case `xhr.send` throws
                        // Remove *all* instances
                        // Remove element nodes and prevent memory leaks
                        // Remove the script
                        // request header to a null-value.
                        // retrieved directly we need to fire the callback
                        // String was a bare <thead> or <tfoot>
                        // Support: Android<4.1, PhantomJS<2
                        // Support: IE <9 only
                        // Support: IE <=8
                        // Support: IE, Opera, Webkit
                        // Support: IE11+
                        // Support: IE6
                        // Support: IE<9
                        // Support: IE<9
                        // Support: IE<9
                        // The attrs elements can be null (#14894)
                        // to allow fixing the IE8 delegated submit issue (gh-2332)
                        // To keep consistent with other XHR implementations, cast the value
                        // to string and ignore `undefined`.
                        // TODO: identify versions
                        // Was never called and is aborted or complete
                        // We don't need an array for one selects
                        // We use jQuery.prop instead of elem.form
                        // Webkit & Blink performance suffers when deleting properties
                        // When new option element is added to select box we need to
                        animation.opts.specialEasing[ prop ] || animation.opts.easing );
                        break;
                        callback( undefined, true );
                        callback();
                        clone = src && jQuery.isArray( src ) ? src : [];
                        clone = src && jQuery.isPlainObject( src ) ? src : {};
                        context && context.nodeType ? context.ownerDocument || context : document,
                        context.setAttribute( "id", (nid = expando) );
                        context;
                        copyIsArray = false;
                        deferred.notifyWith( contexts, values );
                        deferred.resolveWith( contexts, values );
                        delete cache[ id ];
                        deletedIds.push( id );
                        detach();
                        diff -= last;
                        diff = false;
                        dir = simple !== forward ? "nextSibling" : "previousSibling",
                        dirruns = dirrunsUnique;
                        doc[ "client" + name ]
                        elem = this[ i ] || {};
                        elem.addEventListener( type, eventHandle, false );
                        elem.attachEvent( "on" + type, eventHandle );
                        elem.body[ "offset" + name ], doc[ "offset" + name ],
                        elem.body[ "scroll" + name ], doc[ "scroll" + name ],
                        elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
                        elem.lang :
                        elem.value = val;
                        elem[ jQuery.camelCase( "default-" + name ) ] =
                        elem[ ontype ] = null;
                        elem[ ontype ] = tmp;
                        elem[ propName ] = false;
                        elem[ type ]();
                        elemLang = elemLang.toLowerCase();
                        event._submitBubble = true;
                        fire();
                        fire();
                        firingIndex = list.length - 1;
                        firingIndex = list.length;
                        fns = null;
                        for ( i in options.xhrFields ) {
                        for ( match in context ) {
                        for ( type in data.events ) {
                        getWidthOrHeight( elem, name, extra );
                        groups[i] = nidselect + " " + toSelector( groups[i] );
                        handleObj = handlers[ i ];
                        handleObj.handler ).apply( matched.elem, args );
                        handlerQueue.push( { elem: cur, handlers: matches } );
                        handlers.delegateCount--;
                        headers[ "X-Requested-With" ] = "XMLHttpRequest";
                        i = seed.length;
                        id = ++xhrId;
                        if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
                        if ( !isAbort ) {
                        if ( !responseHeaders ) {
                        if ( ( event.result = ret ) === false ) {
                        if ( (elem = context.getElementById( m )) ) {
                        if ( (elem = matcherOut[i]) ) {
                        if ( (elem = unmatched[i]) ) {
                        if ( (oldCache = uniqueCache[ dir ]) &&
                        if ( attrs[ i ] ) {
                        if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
                        if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
                        if ( elem.id !== match[ 2 ] ) {
                        if ( elem.nodeType === 1 ) {
                        if ( event.originalEvent.propertyName === "checked" ) {
                        if ( forward && useCache ) {
                        if ( headers[ i ] !== undefined ) {
                        if ( index <= firingIndex ) {
                        if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
                        if ( matcher( elem, context || document, xml) ) {
                        if ( matcher( elem, context, xml ) ) {
                        if ( matches[ sel ] ) {
                        if ( matches[ sel ] === undefined ) {
                        if ( newContext && (elem = newContext.getElementById( m )) &&
                        if ( nid === expando ) {
                        if ( node.src ) {
                        if ( one ) {
                        if ( responses ) {
                        if ( script.parentNode ) {
                        if ( simple ) {
                        if ( state < 2 ) {
                        if ( this._justChanged && !event.isTrigger ) {
                        if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
                        if ( tmp[ 1 ] === current ) {
                        jQuery.attr( elem, "class", finalValue );
                        jQuery.attr( elem, "class", finalValue );
                        jQuery.contains( doc, node ) ) {
                        jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
                        jQuery.each( args, function( _, arg ) {
                        jQuery.each( tuples, function( i, tuple ) {
                        jQuery.etag[ cacheURL ] = modified;
                        jQuery.event.simulate( "change", this, event );
                        jQuery.find.matchesSelector( cur, selectors ) ) ) {
                        jQuery.lastModified[ cacheURL ] = modified;
                        jQuery.merge( scripts, getAll( node, "script" ) );
                        jQuery.prop( elem, "form" ) :
                        jQuery.ready();
                        list.splice( index, 1 );
                        match = responseHeaders[ key.toLowerCase() ];
                        match[ 1 ],
                        matchedCount--;
                        max :
                        memory = false;
                        name = [ name ];
                        name = name.split( " " );
                        name = ofType && elem.nodeName.toLowerCase(),
                        name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
                        nid = nid.replace( rescape, "\\$&" );
                        one ? index : 0;
                        option.selected = false;
                        options.async,
                        options.password
                        options.stopOnFalse ) {
                        options.type,
                        options.url,
                        options.username,
                        outerCache = elem[ expando ] || (elem[ expando ] = {});
                        parent = elem.parentNode,
                        push.apply( results,
                        push.apply( results, seed );
                        queue.push( memory );
                        rclickable.test( elem.nodeName ) && elem.href ?
                        requestHeaders[ name ] = value;
                        response = conv( response );
                        return diff === first || ( diff % first === 0 && diff / first >= 0 );
                        return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
                        return false;
                        return fn( elem, 0, args );
                        return results;
                        return results;
                        return true;
                        return true;
                        return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
                        s.mimeType = type;
                        script = null;
                        script.onload = script.onreadystatechange = null;
                        seed[temp] = !(results[temp] = elem);
                        sel = handleObj.selector + " ";
                        selector === "**" && handleObj.selector ) ) {
                        self.addClass( className );
                        self.removeClass( className );
                        setDocument( elem );
                        special.remove.call( elem, handleObj );
                        start = [ forward ? parent.firstChild : parent.lastChild ];
                        status = 0;
                        stopQueue( data[ index ] );
                        swap( elem, cssShow, function() {
                        swap( elem, { marginLeft: 0 }, function() {
                        this.focus();
                        this.length = 1;
                        this[ 0 ] = elem;
                        tmp = conv2.split( " " );
                        tmp.firstChild :
                        tmp.push( elem );
                        tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
                        transport.abort( finalText );
                        true
                        try {
                        try {
                        try {
                        undefined;
                        uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
                        unmatched = matcher( seed, null, xml, [] ),
                        unmatched.push( elem );
                        useCache = !xml && !ofType,
                        value = jQuery( option ).val();
                        values.push( value );
                        var idx,
                        var status, statusText, responses;
                        while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
                        while ( i-- ) {
                        while ( i-- ) {
                        window.setTimeout( callback );
                        wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
                        xhr = options.xhr(),
                        xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
                        xhr.overrideMimeType( options.mimeType );
                        xml = !documentIsHTML;
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        }
                        } ) :
                        } ) :
                        } );
                        } );
                        } catch ( _ ) {
                        } catch ( e ) {
                        } catch ( e ) {
                        } else {
                        } else {
                        } else {
                        } else {
                        } else {
                        } else {
                    !top ? val : jQuery( win ).scrollLeft(),
                    "" :
                    "get" in hooks &&
                    "olddisplay",
                    ( !e || jQuery.event.triggered !== e.type ) ?
                    ( !handler || handler.guid === handleObj.guid ) &&
                    ( !selector || selector === handleObj.selector ||
                    ( !tmp || tmp.test( handleObj.namespace ) ) &&
                    ( " " + curValue + " " ).replace( rclass, " " );
                    ( " " + curValue + " " ).replace( rclass, " " );
                    ( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
                    ( copyIsArray = jQuery.isArray( copy ) ) ) ) {
                    ( doc && doc.clientLeft || body && body.clientLeft || 0 );
                    ( doc && doc.clientTop  || body && body.clientTop  || 0 );
                    ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
                    ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
                    ( function add( args ) {
                    ( matchedCount + setMatchers.length ) > 1 ) {
                    ( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
                    ( ret = elem.ownerDocument.createAttribute( name ) )
                    ( ret = hooks.get( elem, "value" ) ) !== undefined
                    ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
                    ( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
                    ( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
                    ( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
                    ( type == null || timers[ index ].queue === type ) ) {
                    (val = elem.getAttributeNode( name )) && val.specified ?
                    ) );
                    ).replace( rtrim, "$1" ),
                    );
                    );
                    +data + "" === data ? +data :
                    --remaining;
                    .indexOf( "application/x-www-form-urlencoded" ) === 0 &&
                    .indexOf( className ) > -1
                    // (it can always be set on a per-request basis or even using ajaxSetup)
                    // ...intermediate processing is necessary
                    // ...otherwise use results directly
                    // `xhr.send` may raise an exception, but it will be
                    // akin to a jigsaw puzzle, we simply never set it to be sure.
                    // Also clear defaultChecked/defaultSelected (if appropriate)
                    // Apply custom fields if provided
                    // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
                    // As well, disconnected nodes are said to be in a document
                    // Bind the global event handler to the element
                    // but there is currently no good, small way to fix it.
                    // Capture the context ID, setting it first if necessary
                    // Check each className given, space separated list
                    // Check parentNode to catch when Blackberry 4.6 returns
                    // Discard index placeholder values to get only actual matches
                    // Do send the request
                    // Do send the request
                    // Document context
                    // Don't keep the element (issue #299)
                    // Don't pass non-elements to Sizzle
                    // Don't re-trigger an onFOO event when we call its FOO() method
                    // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                    // Element context
                    // Expand context for sibling selectors
                    // For cross-domain requests, seeing as conditions for a preflight are
                    // For same-domain requests, won't change header if already provided.
                    // fragment in IE 9
                    // Get the final matcherOut by condensing this intermediate into postFinder contexts
                    // Get width or height on the element, requesting but not forcing parseFloat
                    // handle cases where value is null/undef or number
                    // handle most common string cases
                    // HANDLE: $(html, props)
                    // handled in jQuery.ajax (so no try/catch here)
                    // handled in jQuery.ajax (so no try/catch here)
                    // https://github.com/jquery/jquery/pull/764
                    // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                    // If seed is empty or no tokens remain, we can return early
                    // If there is already a '_' parameter, set its value
                    // if we are going to the end, we want to run all the tweens
                    // If we have memory from a past run, we should fire after adding
                    // Intentionally let the error be thrown if parseHTML is not present
                    // isn't a whole lot we can do. See pull request at this URL for discussion:
                    // Keep references to cloned scripts for later restoration
                    // Lengthen the array for every element, matched or not
                    // Listener
                    // Match elements unmatched by `matcher`
                    // Never move original objects, clone them
                    // nodes that are no longer in the document #6963
                    // oldIE doesn't update selected after form reset (#2551)
                    // only assign if different to avoid unneeded rendering.
                    // Only assign if different to avoid unneeded rendering.
                    // Only convert to a number if it doesn't change the string
                    // Open the socket
                    // option.text throws exceptions (#14686, #14858)
                    // Otherwise add one to the end
                    // otherwise we skip this part
                    // Override mime type if needed
                    // Prefix every selector in the list
                    // Prevent re-triggering of the same event, since we already bubbled it above
                    // Reintegrate element matches to eliminate the need for sorting
                    // Remove cache only if it was not already removed by jQuery.event.remove
                    // Reset value to default in case type is set after value during creation
                    // Run callback and check for early termination
                    // scripts is true for back-compat
                    // Set corresponding property to false
                    // Set headers
                    // Set width or height on the element
                    // Setting the type on a radio button after the value resets the value in IE8-9
                    // split the camel cased version by spaces unless a key with the spaces exists
                    // state = [ resolved | rejected ]
                    // store className if set
                    // String was a <table>, *may* have spurious <tbody>
                    // Strip and collapse whitespace
                    // Support: IE10-11+
                    // Support: IE<9
                    // They will have gone through all possible matchers
                    // This may raise an exception which is actually
                    // unfortunately, this causes bug #3838 in IE6/8 only,
                    // Unless errors are allowed to bubble, catch and return them
                    // We should always get a number back from opacity
                    // whichever is greatest
                    // X-Requested-With header
                    0
                    [ arr ] : arr
                    [ jqXHR, s, isSuccess ? success : error ] );
                    [] :
                    a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
                    add
                    adown.contains( bup ) :
                    anim.stop( true );
                    animation.tweens[ index ].run( 1 );
                    args = [ context, args.slice ? args.slice() : args ];
                    args = args || [];
                    attaches = jQuery._data( doc, fix ) - 1;
                    attaches = jQuery._data( doc, fix );
                    break;
                    break;
                    break;
                    break;
                    cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
                    cacheURL.replace( rts, "$1_=" + nonce++ ) :
                    callback = function( _, isAbort ) {
                    className || value === false ?
                    cloneCopyEvent( node, destElements[ i ] );
                    computed ? "1" : "";
                    computed;
                    context = context instanceof jQuery ? context[ 0 ] : context;
                    context.getElementsByClassName ) {
                    contexts[ i ] = this;
                    continue;
                    continue;
                    cur.nodeType === 1 &&
                    data === "false" ? false :
                    data === "null" ? null :
                    data;
                    dataType = dataType.slice( 1 ) || "*";
                    defer.resolveWith( elements, [ elements ] );
                    deferred.done( arguments ).fail( arguments );
                    deferred.notifyWith( elem, [ animation, 1, 0 ] );
                    deferred.rejectWith( elem, [ animation, gotoEnd ] );
                    deferred.resolveWith( elem, [ animation, gotoEnd ] );
                    dequeue = false;
                    doc = elem.documentElement;
                    doc.addEventListener( orig, handler, true );
                    doc.removeEventListener( orig, handler, true );
                    done( -1, e );
                    done( 0, finalText );
                    elem = 0;
                    elem = document.getElementById( match[ 2 ] );
                    elem = elem.firstChild;
                    elem = tag === "table" && !rtbody.test( elem ) ?
                    elem,
                    elem,
                    elem.document && elem.document.nodeType !== 11 ) {
                    elem.getAttributeNode("id");
                    elem.getBoundingClientRect().left -
                    elem.innerHTML.replace( rinlinejQuery, "" ) :
                    elem.offsetWidth === 0 ?
                    elem.selectedIndex = -1;
                    elem.setAttribute( "type", value );
                    elem.setAttribute( name, "auto" );
                    elem[ method ];
                    elems[ i ],
                    error = response.error;
                    event.data = handleObj.data;
                    event.handleObj = handleObj;
                    event.originalEvent.returnValue = event.result;
                    event.preventDefault();
                    extra,
                    false;
                    finalValue = jQuery.trim( cur );
                    finalValue = jQuery.trim( cur );
                    fixCloneNodeIssues( node, destElements[ i ] );
                    for ( ; i < l; i++ ) {
                    for ( conv2 in converters ) {
                    for ( i = 0; i < delegateCount; i++ ) {
                    for ( i in headers ) {
                    form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?
                    fromElement;
                    function( elem ) {
                    groups = tokenize( selector );
                    handleObj.handler.guid = handler.guid;
                    handleObj.origType + "." + handleObj.namespace :
                    handleObj.origType,
                    handlers.splice( j, 1 );
                    hidden = true;
                    hidden ? display : jQuery.css( elem, "display" )
                    hooks &&
                    hooks.empty.fire();
                    i < j && matcherFromTokens( tokens.slice( i, j ) ),
                    i = attrs.length;
                    i = groups.length;
                    i = index < 0 ?
                    i = matcherOut.length;
                    i = options.length;
                    i > 1 && elementMatcher( matchers ),
                    i > 1 && toSelector(
                    if ( !context && elem.ownerDocument !== document ) {
                    if ( !firing ) {
                    if ( !jQuery.isReady ) {
                    if ( !options.async ) {
                    if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
                    if ( !selector ) {
                    if ( !state ) {
                    if ( !state ) {
                    if ( ( option.selected || i === index ) &&
                    if ( (elem = !matcher && elem) ) {
                    if ( (elem = matcherOut[i]) &&
                    if ( (elemLang = documentIsHTML ?
                    if ( (nid = context.getAttribute( "id" )) ) {
                    if ( b === a ) {
                    if ( cache[ id ] ) {
                    if ( callback ) {
                    if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
                    if ( copyIsArray ) {
                    if ( curValue !== finalValue ) {
                    if ( curValue !== finalValue ) {
                    if ( data.events ) {
                    if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
                    if ( elem && elem.parentNode ) {
                    if ( elem.addEventListener ) {
                    if ( elem.nodeType === 1 ) {
                    if ( elem.nodeType === 1 || checkNonElements ) {
                    if ( elem.nodeType === 1 || checkNonElements ) {
                    if ( Expr.relative[ tokens[j].type ] ) {
                    if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
                    if ( handleObj.selector ) {
                    if ( hasScripts ) {
                    if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {
                    if ( jQuery.contains( self[ i ], this ) ) {
                    if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1 ) {
                    if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
                    if ( map ) {
                    if ( matchedCount > 0 ) {
                    if ( matches.length ) {
                    if ( memory && !firing ) {
                    if ( memory && !firing ) {
                    if ( modified ) {
                    if ( modified ) {
                    if ( name in thisCache ) {
                    if ( nodeType === 9 ) {
                    if ( options.mimeType && xhr.overrideMimeType ) {
                    if ( options.xhrFields ) {
                    if ( outermost ) {
                    if ( parent ) {
                    if ( ret !== undefined ) {
                    if ( rscriptType.test( node.type || "" ) &&
                    if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
                    if ( seed ) {
                    if ( self.hasClass( className ) ) {
                    if ( special.remove ) {
                    if ( state === 2 ) {
                    if ( status < 0 ) {
                    if ( tmp ) {
                    if ( tmp ) {
                    if ( transport ) {
                    if ( val ) {
                    if ( values === progressValues ) {
                    index = elem.selectedIndex,
                    input[0] = elem;
                    input[0] = null;
                    isSuccess = !error;
                    j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
                    j < len && toSelector( tokens )
                    j = 0;
                    j = 0;
                    j = 0;
                    j = elem && elem.childNodes.length;
                    jQuery( callbackContext ) :
                    jQuery( elem ).position()[ prop ] + "px" :
                    jQuery._data( doc, fix, attaches );
                    jQuery._data( elem, "change", true );
                    jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
                    jQuery._data( elem, "parsedAttrs", true );
                    jQuery._data( form, "submit", true );
                    jQuery._data( this, "__className__" ) || ""
                    jQuery._data( this, "__className__", className );
                    jQuery._removeData( doc, fix );
                    jQuery.attr( elem, name, "" );
                    jQuery.css( elem, type, extra ) :
                    jQuery.cssHooks[ tween.prop ] ) ) {
                    jQuery.dequeue( this, type );
                    jQuery.event,
                    jQuery.event.add( elem, "change._change", function( event ) {
                    jQuery.event.add( form, "submit._submit", function( event ) {
                    jQuery.event.add( this, "click._change", function( event ) {
                    jQuery.event.add( this, "propertychange._change", function( event ) {
                    jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
                    jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
                    jQuery.event.simulate( "submit", this.parentNode, event );
                    jQuery.event.trigger( "ajaxStop" );
                    jQuery.event.triggered = type;
                    jQuery.event.triggered = undefined;
                    jQuery.inArray( fn, list ) > -1 :
                    jQuery.map( val, function( val ) {
                    jQuery.merge( this, jQuery.parseHTML(
                    jQuery.nodeName( elem, "input" ) ) {
                    jQuery.offset.setOffset( this, options, i );
                    jQuery.proxy( result.stop, result );
                    jQuery.removeEvent( elem, type, elemData.handle );
                    jQuery.style( elem, type, value, extra );
                    jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
                    jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
                    jQuery.valHooks[ elem.nodeName.toLowerCase() ];
                    jqXHR.abort( "timeout" );
                    key,
                    length = gotoEnd ? animation.tweens.length : 0;
                    list = "";
                    list = [];
                    list = [];
                    list.length > 0;
                    map.push( i );
                    map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
                    markFunction(function( seed, matches ) {
                    matchAnyContext( elem, context, xml ) );
                    matchContext( elem, context, xml ) :
                    matched.push( cur );
                    matcher( input, null, xml, results );
                    matcher( unmatched, setMatched, context, xml );
                    matcher,
                    matcherOut
                    matcherOut.splice( preexisting, matcherOut.length ) :
                    matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
                    matches = [];
                    matches: match
                    max = one ? index + 1 : options.length,
                    modified = jqXHR.getResponseHeader( "etag" );
                    modified = jqXHR.getResponseHeader( "Last-Modified" );
                    name = [ name ];
                    name = jQuery.camelCase( name );
                    name,
                    name.toLowerCase() :
                    name.toLowerCase() :
                    newContext = context;
                    newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
                    newSelector = groups.join( "," );
                    newSelector = selector;
                    nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
                    node = jQuery.clone( node, true, true );
                    node = scripts[ i ];
                    nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
                    null;
                    null;
                    null;
                    oldfire();
                    one = elem.type === "select-one" || index < 0,
                    operator === "!=" ? result !== check :
                    operator === "$=" ? check && result.slice( -check.length ) === check :
                    operator === "*=" ? check && result.indexOf( check ) > -1 :
                    operator === "^=" ? check && result.indexOf( check ) === 0 :
                    operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
                    operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
                    option = options[ i ];
                    option = options[ i ];
                    options = elem.options,
                    options = elem.options,
                    original.toElement :
                    parent.parentNode.selectedIndex;
                    parent.parentNode.selectedIndex;
                    parent.replaceChild( elem, this );
                    parseInt( tabindex, 10 ) :
                    parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
                    pos.index( cur ) > -1 :
                    postFinder( null, (matcherOut = []), temp, xml );
                    prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
                    props[ index ] = value[ index ];
                    push.apply( results, context.getElementsByClassName( m ) );
                    push.apply( results, context.getElementsByTagName( selector ) );
                    queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
                    queue.push( args );
                    queue.push( data );
                    queue[ index ].finish.call( this );
                    raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
                    rbrace.test( data ) ? jQuery.parseJSON( data ) :
                    resolveValues[ i ].promise()
                    results :
                    ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
                    ret == null ? "" : ret;
                    ret.push( value );
                    ret.push( value );
                    ret.replace( rreturn, "" ) :
                    ret.value :
                    return !!elem.parentNode;
                    return !results.pop();
                    return bulk.call( jQuery( elem ), value );
                    return elem.document.documentElement[ "client" + name ];
                    return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    return false;
                    return false;
                    return false;
                    return false;
                    return i;
                    return jQuery.Deferred( function( newDefer ) {
                    return match == null ? null : match;
                    return matcher( elem, context, xml );
                    return Math.max(
                    return obj != null ? jQuery.extend( obj, promise ) : promise;
                    return operator === "!=";
                    return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
                    return results;
                    return results;
                    return ret === "" ? "1" : ret;
                    return ret;
                    return state === 2 ? responseHeadersString : null;
                    return state;
                    return this;
                    return this;
                    return this;
                    return this;
                    return this;
                    return this;
                    return this;
                    return this;
                    return true;
                    return true;
                    return value == null ? "" : value + "";
                    return value;
                    return value;
                    return;
                    rfocusable.test( elem.nodeName ) ||
                    rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
                    script.charset = s.scriptCharset;
                    script.onload( undefined, true );
                    scripts.push( elem );
                    seed[j] = !(matches[j] = seed[j]);
                    selector = seed.length && toSelector( tokens );
                    self.disable();
                    setMatched = condense( setMatched );
                    Sizzle.error( "unsupported pseudo: " + pseudo );
                    Sizzle.error( match[0] );
                    Sizzle.uniqueSort( results );
                    special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
                    special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
                    specialEasing[ index ] = easing;
                    state = stateString;
                    stateVal
                    statusText = "error";
                    statusText = "nocontent";
                    statusText = "notmodified";
                    statusText = response.state;
                    stopQueue( data[ index ] );
                    style.removeAttribute ) {
                    style[ name ] = value;
                    styles
                    success = response.data;
                    support.boxSizing &&
                    target[ name ] = copy;
                    target[ name ] = jQuery.extend( deep, clone, copy );
                    temp = [];
                    this.blur();
                    this.click();
                    this.context = document;
                    this.selector = selector;
                    throw e;
                    throw new Error( "jQuery requires a window with a document" );
                    timers.splice( index, 1 );
                    timers.splice( index, 1 );
                    timers[ index ].anim.stop( gotoEnd );
                    timers[ index ].anim.stop( true );
                    tmp = elem[ ontype ];
                    tmp = tmp.lastChild;
                    tmp.removeChild( tmp.firstChild );
                    token.matches[0].replace( runescape, funescape ),
                    tokens.splice( i, 1 );
                    top ? val : jQuery( win ).scrollTop()
                    traditional,
                    try {
                    try {
                    try {
                    tween.end = tween.start;
                    tween.start = prop === "width" || prop === "height" ? 1 : 0;
                    type: type,
                    typeof arr === "string" ?
                    undefined;
                    undefined;
                    v,
                    val :
                    val.value :
                    value.call( this, i, getClass( this ), stateVal ),
                    value: matched,
                    values = jQuery.makeArray( value ),
                    values = one ? null : [],
                    values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
                    var cache, uniqueCache, outerCache, node, nodeIndex, start,
                    var code;
                    var elem,
                    var finalText = statusText || strAbort;
                    var fns = arguments;
                    var i,
                    var index;
                    var lname = name.toLowerCase();
                    var match;
                    var ret = curCSS( elem, "opacity" );
                    var val = elem.value;
                    while ( ( clazz = classes[ j++ ] ) ) {
                    while ( ( clazz = classes[ j++ ] ) ) {
                    while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
                    while ( (matcher = elementMatchers[j++]) ) {
                    while ( i-- ) {
                    while ( i-- ) {
                    while ( i-- ) {
                    while ( i-- ) {
                    while ( j-- ) {
                    win.document.documentElement[ method ] :
                    xhr.open(
                    xhr.send( ( options.hasContent && options.data ) || null );
                    { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    } ) :
                    } )( arguments );
                    } ).promise();
                    } );
                    } );
                    } );
                    } );
                    } catch ( e ) {
                    } catch ( e ) {
                    } catch ( qsaError ) {
                    } else if ( !( --remaining ) ) {
                    } else if ( elem.attachEvent ) {
                    } else if ( xhr.readyState === 4 ) {
                    } else {
                    } else {
                    } else {
                    } else {
                    } else {
                    } else {
                    } else {
                    } else {
                    } else {
                    } finally {
                    }) :
                    };
                    };
                 special._default.apply( eventPath.pop(), data ) === false
                !compilerCache[ selector + " " ] &&
                !event.isImmediatePropagationStopped() ) {
                !hasOwn.call( obj, "constructor" ) &&
                !hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
                !parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );
                !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
                !support.checkClone && rchecked.test( value ) ) ) {
                !wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
                "<option selected=''></option></select>";
                "<select id='" + expando + "-\r\\' msallowcapture=''>" +
                "box-sizing:content-box;display:block;margin:0;border:0;" +
                "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                "padding:1px;width:1px;zoom:1";
                ( !special._default ||
                ( " " + getClass( elem ) + " " ).replace( rclass, " " )
                ( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
                ( callbackContext.nodeType || callbackContext.jquery ) ?
                ( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {
                ( elem.type !== "radio" && elem.type !== "checkbox" ) ) {
                ( function doScrollCheck() {
                ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
                ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
                ( jQuery.contains( elem.ownerDocument, elem ) ?
                ( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
                ( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
                ( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
                ( ret = hooks.set( elem, value, name ) ) !== undefined ) {
                ( ret = hooks.set( elem, value, name ) ) !== undefined ) {
                ( s.contentType || "" )
                ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
                ( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
                ( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
                ( this.checked || !rcheckableType.test( type ) );
                ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
                ( value = hooks.set( elem, value, extra ) ) !== undefined ) {
                (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
                (checkContext = context).nodeType ?
                (excess = tokenize( unquoted, true )) &&
                (excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
                (match = preFilters[ type ]( match ))) ) {
                (pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
                )
                ) && acceptData( elem )
                ) : 0
                ) {
                )) ) {
                );
                );
                );
                );
                );
                );
                );
                );
                );
                );
                .appendTo( doc.documentElement );
                /* jshint eqeqeq: true */
                //
                // #9682: remove data so that it's not used in an eventual retry
                // [ reject_list | resolve_list ].disable; progress_list.lock
                // a subset or equal to those in the bound event (both can have no namespace).
                // action, add listener, listener list, final state
                // Add matches to results
                // advance to the next closing parenthesis
                // after a propertychange. Eat the blur-change in special.change.handle.
                // Always skip document fragments
                // and we are going to proceed with show, we should pretend to be hidden
                // Apply converter (if not an equivalence)
                // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
                // Assume that strings that start and end with <> are HTML and skip the regex check
                // assumes a single number if not a string
                // Attach handlers for all browsers
                // Avoid an infinite loop by temporarily removing this function from the getter
                // BMP codepoint
                // Boolean attributes get special treatment (#10870)
                // both plain key and camelCase key. #12786
                // Builds headers hashtable if needed
                // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                // Caches the header
                // Call a native DOM method on the target with the same name name as the event.
                // Can't use an .isFunction() check here because IE6/7 fails that test.
                // Cancel the request
                // Cast descendant combinators to space
                // certain elements can have dimension info if we invisibly show them
                // Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
                // Class selector
                // constancy with other events and for more focused logic
                // correct value when it hasn't been explicitly set
                // Descend through wrappers to the right content
                // Deserialize a standard representation
                // Discard the second event of a jQuery.event.trigger() and
                // Does not return so that setAttribute is also used
                // Don't bring in undefined values
                // Don't check non-elements (#13208)
                // Don't consume trailing commas as valid
                // Don't do default actions on window, that's where global variables be (#6170)
                // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                // elem.tabIndex doesn't always return the
                // Empty animations, or finishing resolves immediately
                // ensure a hooks for this queue
                // Ensure that the destination node is not null; Fixes #9587
                // Evaluate executable scripts on first document insertion
                // excess is a negative index
                // Exclude object elements
                // Exclude scripts to avoid IE 'Permission Denied' errors
                // Execute immediately if ready is not present
                // falling back to the empty string if nothing was stored.
                // Find the next relative operator (if any) for proper handling
                // Firefox doesn't alert if the returnValue field is not set.
                // Fix #12392 for oldIE
                // Fix #12392 for WebKit and IE > 9
                // Fixes bug #9237
                // Force browsers to behave consistently when non-matching value is set
                // Get a promise for this deferred
                // Get document width or height
                // Get excess from tokenize (recursively)
                // getClientRects() errors on disconnected elems
                // Guard for simulated events was moved to jQuery.event.stopPropagation function
                // Handle the global AJAX counter
                // HANDLE: $(#id)
                // HANDLE: $(html) -> $(array)
                // Hook not needed (or it's not possible to use it due
                // however, it must have a current display style that would benefit from this
                // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                // ID selector
                // IE doesn't fire change on a check/radio until blur; trigger it on click
                // if "filter:" is present at all, clearType is disabled, we want to avoid this
                // If "name" is an array of keys...
                // If a selector was specified, locate the right elements in a dummy div
                // if curCSS returns percentage, fallback to offset
                // if no content
                // If none found, seek a pair
                // if not modified
                // If obj is provided, the promise aspect is added to the object
                // If the element has a class name or if we're passed "false",
                // If there is dataShow left over from a stopped hide or show
                // if there is no filter style applied in a css rule
                // If using innerHTML throws an exception, use the fallback method
                // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                // If we have data, let's convert it
                // Item is non-scalar (array or object), encode its numeric index.
                // jQuery.event.stopPropagation function we had a check for existence of
                // Keep an empty list if we have data for future add calls
                // keys will be converted to camelCase.
                // Loop through all the selected options
                // Make sure that it also works with optgroups, see #5701
                // make sure that re-using the options doesn't screw things around
                // Manually add leading whitespace removed by IE
                // Move matched elements from seed to results to keep them synchronized
                // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                // Node name check avoids a VML-related crash in IE (#9807)
                // nth-* requires argument
                // numeric x and y parameters for Expr.filter.CHILD
                // Only use addEventListener/attachEvent if the special events handler returns false
                // Operate on a copy of prop so per-property easing won't be lost
                // or unset inline opacity, we are done
                // originalEvent.stopPropagation method, so, consequently it would be a noop.
                // Otherwise append
                // Otherwise bring back whatever was previously saved (if anything),
                // Otherwise use the full result
                // otherwise, reject
                // Otherwise, this object is spent
                // Overrides response content-type header
                // Prepend if requested
                // Prevent never-ending loop
                // Previously, `originalEvent: {}` was set here, so stopPropagation call
                // Propagate exception as error if not done
                // Put in the new values to get a computed value out
                // qSA looks outside Element context, which is not what we want
                // Raw string
                // Recurse if we're merging plain objects or arrays
                // Reenable scripts
                // remember that false/true cast respectively to 0/1
                // Remember the original values
                // Remember the top-level container for proper cleanup
                // Remove IE's autoinserted <tbody> from table fragments
                // resolve when we played the last frame
                // Revert the changed values
                // Running getBoundingClientRect on a disconnected node in IE throws an error
                // save the callback name for future use
                // Search, expanding context for leading sibling combinators
                // See #9699 for explanation of this approach (setting first, then removal)
                // Seedless set matches succeeding multiple successful matchers stipulate sorting
                // Seek a direct converter
                // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                // Setting style.filter to null, "" & " " still leave "filter:" in the cssText
                // Shortcut for :nth-*(n)
                // Simply rethrow otherwise
                // since `originalEvent` should point to the original event for the
                // Since there is no way to tell _how_ a key was added, remove
                // Skip accessing in sparse arrays
                // Status-dependent callbacks
                // style.removeAttribute is IE Only, but so apparently is this code path...
                // Supplemental Plane codepoint (surrogate pair)
                // Support: Android 2.3
                // Support: Android 2.3
                // Support: Firefox 20+
                // Support: Firefox<29, Android 2.3
                // Support: IE
                // Support: IE < 9, Android < 4.0
                // Support: IE <=8
                // Support: IE8 only
                // Support: IE<8
                // Support: IE<=11+
                // Swallow errors from 'invalid' CSS values (#5509)
                // Thanks to Andrew Dupont for this workaround technique
                // then normalize statusText and status for non-aborts
                // then remove the whole classname (if there was one, the above saved it).
                // This expression is here for better compressibility (see addClass)
                // This still fires onchange a second time for check/radio after blur.
                // This will only penalize the array argument path.
                // to missing dependency), remove it.
                // Toggle individual class names
                // Track unmatched elements for set filters
                // Treat each array item as a scalar.
                // Triggered event must either 1) have no namespace, or 2) have namespace(s)
                // try the string as a key before any manipulation
                // Type selector
                // Use integer dirruns iff this is the outermost matcher
                // Use native DOM manipulation to avoid our domManip AJAX trickery
                // Use nodeHook if defined (#1954); otherwise setAttribute is fine
                // Use proper attribute retrieval(#12072)
                // Vendor-prefix box-sizing
                // Vendor-prefix box-sizing
                // We extract error from statusText
                // We must always have either seed elements or outermost context
                // when an event is called after a page has unloaded
                // When data is initially created, via ("key", "val") signature,
                // would not be triggered on donor event, since in our own
                0;
                0;
                0;
                1 type (only|nth|...)
                2 what (child|of-type)
                3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
                4 xn-component of xn+y argument ([+-]?\d*n|)
                5 sign of xn-component
                6 x of xn-component
                7 sign of y-component
                8 y of y-component
                [ "notify", "progress", jQuery.Callbacks( "memory" ) ]
                [ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
                [ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
                abort: function( statusText ) {
                abort: function() {
                add( prefix, v );
                adown.contains ?
                always: function() {
                animation.tweens.push( tween );
                animation.tweens[ index ].run( percent );
                args = [ pseudo, pseudo, "", argument ];
                args[ 0 ] = value.call( this, index, self.html() );
                attrHandle[ name ] = handle;
                attrHandle[ name ] = ret;
                augmentWidthOrHeight(
                aup ? -1 :
                b === document ? 1 :
                body = eventDoc.body;
                break;
                break;
                break;
                break;
                bubbleType :
                buildParams(
                bulk = fn;
                bup = b && b.parentNode;
                bup ? 1 :
                button = original.button,
                cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
                callback.apply( self, response || [ jqXHR.responseText, status, jqXHR ] );
                callback.call( collection[ i ], node, i );
                classCache( className, function( elem ) {
                className = getClass( this );
                classNames = value.match( rnotwhite ) || [];
                cloneCopyEvent( elem, clone );
                computed = curCSS( elem, prop );
                computeStyleTests();
                computeStyleTests();
                computeStyleTests();
                computeStyleTests();
                computeStyleTests();
                computeStyleTests();
                condense( elems, preMap, preFilter, context, xml ) :
                contents = self.contents();
                contents.wrapAll( html );
                contents[ 0 ].style.display = "";
                contents[ 1 ].style.display = "none";
                context = context.parentNode;
                context.querySelectorAll( tag || "*" ) :
                contextBackup = outermostContext,
                continue;
                continue;
                conv = converters[ prev + " " + current ] || converters[ "* " + current ];
                copy = options[ name ];
                count++;
                cur = cur.parentNode;
                cur = elem.nodeType === 1 &&
                cur = elem.nodeType === 1 &&
                curCSS, [ elem, "marginRight" ] );
                current = prev;
                currentStyle = elem.currentStyle,
                curValue = getClass( elem );
                curValue = getClass( elem );
                data = data === "true" ? true :
                data = id && cache[ id ];
                data = jQuery._data( this ),
                data = jQuery._data( this );
                data = jQuery.data( elem );
                data: data,
                dataShow[ prop ] = tween.start;
                dataTypes.unshift( type );
                deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
                deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
                deferred.resolveWith( elem, [ animation ] );
                deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
                delete event._submitBubble;
                delete events[ type ];
                delete s.data;
                delete this.get;
                delete this[ name ];
                delete thisCache[ name[ i ] ];
                destElements = destElements || getAll( clone );
                dirruns = dirrunsUnique;
                dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                do {
                doc = eventDoc.documentElement;
                doc = scripts[ scripts.length - 1 ].ownerDocument;
                easing: jQuery.easing._default
                elem.currentStyle.filter :
                elem.defaultValue = value;
                elem.options.length = 0;
                elem.parentNode.selectedIndex;
                elem.removeAttribute( getSetAttribute ? name : propName );
                elem.removeChild( elem.firstChild );
                elem.setAttributeNode(
                elem.style.display = "";
                elem.style.filter ) || "" ) ?
                elem.type === "text" &&
                elem[ method ] = val;
                elem[ name ] = null;
                elementMatchers.push( cached );
                elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
                elems,
                error = statusText;
                event.pageX = original.clientX +
                event.pageY = original.clientY +
                event.relatedTarget = fromElement === event.target ?
                event.result = handle.apply( cur, data );
                event.type = fix;
                event.type = handleObj.origType;
                event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
                event.which = original.charCode != null ? original.charCode : original.keyCode;
                eventDoc = event.target.ownerDocument || document;
                eventPath.push( cur );
                eventPath.push( tmp.defaultView || tmp.parentWindow || window );
                expanded = {},
                expanded[ prefix + cssExpand[ i ] + suffix ] =
                Expr.relative[ tokens[1].type ] ) {
                extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
                filter + " " + opacity;
                filter = currentStyle && currentStyle.filter || style.filter || "";
                filter.replace( ralpha, opacity ) :
                finalDataType = type;
                first[ i++ ] = second[ j++ ];
                firstDataType = type;
                fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
                fn = function( elem, key, value ) {
                fn = null;
                fn(
                fn.call( elems, value );
                for ( ; i < len; i++ ) {
                for ( ; i < max; i++ ) {
                for ( ; index < length ; index++ ) {
                for ( ; j < len; j++ ) {
                for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
                for ( i = 0; i < hasScripts; i++ ) {
                for ( i = 0; i < len; i++ ) {
                for ( index in data ) {
                for ( type in events ) {
                forward = type.slice( -4 ) !== "last",
                found.push( elem );
                fromElement = original.fromElement;
                function( elem ) {
                function( elem ) {
                function( elem, context, xml ) {
                function( elem, context, xml ) {
                function() { return true; } :
                getAllResponseHeaders: function() {
                getResponseHeader: function( key ) {
                globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
                globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
                globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
                guid: handler.guid,
                handle = attrHandle[ name ];
                handle.apply( cur, data );
                handleObj = event.handleObj;
                handleObj = handlers[ j ];
                handleObj.handler
                handleObj.namespace ?
                handleObj.selector,
                handler: handler,
                handlers = events[ type ] = [];
                handlers.delegateCount = 0;
                handlers.push( handleObj );
                handlers.splice( handlers.delegateCount++, 0, handleObj );
                head.insertBefore( script, head.firstChild );
                hidden = dataShow.hidden;
                hooks = data[ type + "queueHooks" ],
                hooks = jQuery.valHooks[ elem.type ] ||
                hooks.stop.call( this, true );
                hooks.unqueued--;
                i = "0",
                i = 0,
                i = 0,
                i = 0;
                i = 0;
                i = 0;
                i = matcherOut.length;
                i = matchIndexes.length;
                id = elem[ internalKey ];
                if (
                if ( !( --count ) ) {
                if ( !( --jQuery.active ) ) {
                if ( !( index in props ) ) {
                if ( !attaches ) {
                if ( !attaches ) {
                if ( !conv ) {
                if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
                if ( !handleObj.handler.guid ) {
                if ( !hooks.unqueued ) {
                if ( !jQuery.queue( elem, "fx" ).length ) {
                if ( !locked ) {
                if ( !match[3] ) {
                if ( !matchers[i]( elem, context, xml ) ) {
                if ( !memory ) {
                if ( !operator ) {
                if ( !optionSet ) {
                if ( !queue || jQuery.isArray( data ) ) {
                if ( !special.setup ||
                if ( !special.teardown ||
                if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
                if ( !support.radioValue && value === "radio" &&
                if ( !support.tbody ) {
                if ( !w.document ) {
                if ( ( mappedTypes || origType === handleObj.origType ) &&
                if ( (elem = temp[i]) ) {
                if ( (m = match[1]) ) {
                if ( (seed = find(
                if ( byElement && elem ) {
                if ( bySet ) {
                if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
                if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
                if ( className ) {
                if ( computed ) {
                if ( conv !== true ) {
                if ( cur ) {
                if ( cur ) {
                if ( cur.nodeType < 11 && ( pos ?
                if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
                if ( data ) {
                if ( data[ index ] && data[ index ].stop ) {
                if ( dataType.charAt( 0 ) === "+" ) {
                if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
                if ( destElements[ i ] ) {
                if ( elem.nodeType < 6 ) {
                if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
                if ( elem.nodeType === 1 || checkNonElements ) {
                if ( elem.nodeType === 9 ) {
                if ( empty || jQuery._data( this, "finish" ) ) {
                if ( event.result !== undefined && event.originalEvent ) {
                if ( event.result === false ) {
                if ( form && !jQuery._data( form, "submit" ) ) {
                if ( gotoEnd ) {
                if ( hidden ) {
                if ( i !== iNoClone ) {
                if ( i in arr && arr[ i ] === elem ) {
                if ( jQuery.contains( this, targets[ i ] ) ) {
                if ( jQuery.expr.match.bool.test( name ) ) {
                if ( jQuery.isWindow( elem ) ) {
                if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
                if ( list ) {
                if ( list ) {
                if ( mapped ) {
                if ( match[ 1 ] ) {
                if ( memory ) {
                if ( name in thisCache ) {
                if ( newSelector ) {
                if ( nodeType !== 1 ) {
                if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {
                if ( outermost && !seed && setMatched.length > 0 &&
                if ( parent ) {
                if ( parent.parentNode ) {
                if ( parent.parentNode ) {
                if ( postFinder ) {
                if ( queue[ index ] && queue[ index ].finish ) {
                if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
                if ( result == null ) {
                if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
                if ( rscriptType.test( elem.type || "" ) ) {
                if ( s.ifModified ) {
                if ( s.scriptCharset ) {
                if ( script ) {
                if ( seed ) {
                if ( seed[ (j = matchIndexes[i]) ] ) {
                if ( state < 2 ) {
                if ( status === 204 || s.type === "HEAD" ) {
                if ( status || !statusText ) {
                if ( stopped ) {
                if ( target === copy ) {
                if ( this !== safeActiveElement() && this.focus ) {
                if ( this === safeActiveElement() && this.blur ) {
                if ( this.parentNode && !event.isTrigger ) {
                if ( this.type === "checkbox" || this.type === "radio" ) {
                if ( timers[ index ].elem === this &&
                if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
                if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
                if ( value != null ) {
                if ( value != null ) {
                if ( value === "" ) {
                if ( value === "" || currentStyle && !currentStyle.filter ) {
                if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
                ignored.push( elem );
                index = 0,
                index = type != null && type + "queueHooks",
                inspect( dataTypeOrTransport );
                isSimulated: true
                j = ++i;
                j = 0;
                j = duplicates.push( i );
                j = wrap[ 0 ];
                jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
                jQuery( elem ).hide();
                jQuery( selector ) :
                jQuery( selectors, context || this.context ) :
                jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
                jQuery( this ).hide();
                jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
                jQuery( this ).replaceWith( this.childNodes );
                jQuery( this ).show();
                jQuery( this ).toggleClass(
                jQuery( this ).wrapAll( html.call( this, i ) );
                jQuery( this ).wrapInner( html.call( this, i ) );
                jQuery( window ).removeProp( callbackName );
                jQuery._data(
                jQuery._data( cur, "handle" );
                jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
                jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
                jQuery._queueHooks( this, type );
                jQuery._removeData( elem, key );
                jQuery._removeData( elem, type + "queue" );
                jQuery.attr( this, "class",
                jQuery.cleanData( getAll( elem, false ) );
                jQuery.cleanData( getAll( this ) );
                jQuery.css( elem, name );
                jQuery.css( offsetParent, "position" ) === "static" ) ) {
                jQuery.data( this, key );
                jQuery.data( this, key, value );
                jQuery.dequeue( elem, type );
                jQuery.dequeue( this, type );
                jQuery.each( arguments, function( _, arg ) {
                jQuery.error( callbackName + " was not called" );
                jQuery.event.add( dest, type, events[ type ][ i ] );
                jQuery.fx.step[ tween.prop ]( tween );
                jQuery.isArray( val ) ?
                jQuery.map( scripts, restoreScript );
                jQuery.merge( found, getAll( elem, tag ) );
                jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
                jQuery.merge( nodes, tmp.childNodes );
                jQuery.merge( ret,
                jQuery.merge( this.get(), jQuery( selector, context ) )
                jQuery.removeAttr( elem, name );
                jQuery.style( elem, name, value ) :
                jQuery.style( elem, prop, orig[ prop ] );
                jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
                jQuery.text( this ) :
                jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
                jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
                l = this.length;
                len = elems.length;
                len = name.length;
                length = animation.tweens.length;
                length = queue ? queue.length : 0;
                list = memory = "";
                list.add( function() {
                list.pop()
                locked = queue = [];
                locked = true;
                map = {},
                markFunction(function( seed, matches, context, xml ) {
                match = [ null, selector, null ];
                match = rquickExpr.exec( selector );
                match[0] = match[0].slice( 0, excess );
                match[2] = match[4] || match[5] || "";
                match[2] = unquoted.slice( 0, excess );
                match[3] = " " + match[3] + " ";
                match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
                match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
                matched = match.shift();
                matchedCount = 0,
                matcher = compile( selector.replace( rtrim, "$1" ) );
                matcherIn;
                matcherOut === results ?
                matches.push( elems[ i ] );
                matchIndexes = fn( [], seed.length, argument ),
                matchIndexes.push( i );
                matchIndexes.push( i );
                matchIndexes.push( i );
                matchIndexes.push( i );
                maxWidth = style.maxWidth;
                memory = false;
                memory = queue.shift();
                minWidth = style.minWidth;
                name = name.concat( jQuery.map( name, jQuery.camelCase ) );
                namespace: namespaces.join( "." )
                needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
                new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
                newCache = [ dirruns, doneName ];
                newUnmatched.push( elem );
                node = fragment;
                nodes.push( context.createTextNode( elem ) );
                null :
                null;
                null;
                offsetParent = offsetParent.offsetParent;
                ofType = what === "of-type";
                oldCallbacks.push( callbackName );
                opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
                options.dataTypes.unshift( dataTypeOrTransport );
                origType: origType,
                outermostContext = context === document || context || outermost;
                outermostContext = contextBackup;
                overrideMimeType: function( type ) {
                overwritten( responseContainer[ 0 ] );
                parent.selectedIndex;
                parent.selectedIndex;
                parentOffset = offsetParent.offset();
                parseFloat( curCSS( elem, "marginLeft" ) ) ||
                parts = typeof value === "string" ? value.split( " " ) : [ value ];
                percent = 1 - temp,
                percent, this.options.duration * percent, 0, 1, this.options.duration
                postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
                postFinder( null, results, matcherOut, xml );
                promise: function( obj ) {
                propName = jQuery.propFix[ name ] || name;
                push.apply( results, matcherOut );
                push.apply( results, setMatched );
                push.call( ret, arr );
                queue = data[ type + "queue" ],
                queue.unshift( "inprogress" );
                rbuggyQSA.push( ":enabled", ":disabled" );
                rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
                rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
                rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
                rbuggyQSA.push(".#.+[+~]");
                rbuggyQSA.push(":checked");
                rbuggyQSA.push("~=");
                readyState: 0,
                related = event.relatedTarget,
                reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
                remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
                response = ajaxHandleResponses( s, jqXHR, responses );
                responseText );
                result += "";
                results = [],
                results = context.getElementsByTagName( tag );
                ret += getText( elem );
                ret = computed.width;
                ret = elem.value;
                ret = getter( elem, name, isXML ) != null ?
                ret = handleObj.handler.apply( this, arguments );
                ret = jQuery.uniqueSort( ret );
                ret = ret.reverse();
                return !!fired;
                return !!locked;
                return !( selected = dataTypeOrTransport );
                return !list;
                return ( context || root ).find( selector );
                return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
                return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
                return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
                return -1;
                return -1;
                return 1;
                return context.getElementsByTagName( tag );
                return context.querySelectorAll( tag );
                return elem.getAttribute( name, 4 );
                return elem.getAttribute("id") === attrId;
                return elem.nodeType === 1 ?
                return elem;
                return elem[ jQuery.camelCase( "default-" + name ) ] ?
                return event.handleObj.handler.apply( this, arguments );
                return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
                return factory( w );
                return false;
                return false;
                return false;
                return false;
                return false;
                return false;
                return false;
                return false;
                return fn ?
                return fn( argument );
                return function( value ) {
                return hasOwn.call( obj, key );
                return i;
                return indexOf.call( arr, elem, i );
                return jQuery.nodeName( event.target, "a" );
                return jqXHR;
                return m ? [ m ] : [];
                return map;
                return node && node.value === attrId;
                return nodeHook && nodeHook.set( elem, value, name );
                return null;
                return operator === "=" ? result === check :
                return options;
                return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
                return remaining;
                return results;
                return ret.value;
                return ret;
                return ret;
                return ret;
                return ret;
                return rnumnonpx.test( computed ) ?
                return setMatcher(
                return Sizzle( selector, elem ).length > 0;
                return tabindex ?
                return this.constructor( context ).find( selector );
                return this;
                return this;
                return this;
                return this;
                return this;
                return this;
                return this;
                return this;
                return this;
                return tmp;
                return true;
                return tween.elem[ tween.prop ];
                return tween;
                return typeof jQuery !== "undefined" &&
                return typeof ret === "string" ?
                return val != null ?
                return value === undefined ?
                return value;
                return values;
                return win ? ( prop in win ) ? win[ prop ] :
                return;
                return;
                return;
                return;
                return;
                return;
                rjsonp.test( s.data ) && "data"
                rkeyEvent.test( type ) ? this.keyHooks :
                rmouseEvent.test( type ) ? this.mouseHooks :
                root.ready( selector ) :
                rs.left = elem.currentStyle.left;
                rs.left = rsLeft;
                rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
                s.accepts[ "*" ]
                s.accepts[ s.dataTypes[ 0 ] ] +
                s.jsonpCallback = originalSettings.jsonpCallback;
                s.url = rts.test( cacheURL ) ?
                script = document.createElement( "script" );
                script.async = true;
                script.onload = script.onreadystatechange = function( _, isAbort ) {
                script.src = s.url;
                selector || [],
                selector( jQuery );
                selector.charAt( selector.length - 1 ) === ">" &&
                selector.length >= 3 ) {
                selector: selector,
                self = jQuery( this );
                self.append( html );
                self.fireWith( this, arguments );
                send: function( headers, complete ) {
                setGlobalEval( getAll( node, "script" ) );
                setMatched = [],
                setMatchers.push( cached );
                setRequestHeader: function( name, value ) {
                Sizzle.error( "unsupported lang: " + lang );
                Sizzle.error( match[0] );
                soFar = soFar.slice( match[0].length ) || soFar;
                soFar = soFar.slice( matched.length );
                sortInput ?
                special.add.call( elem, handleObj );
                special.bindType || type;
                specialEasing: {},
                src = target[ name ];
                src.defaultPrevented === undefined &&
                src.returnValue === false ?
                srcElements = srcElements || getAll( elem );
                state = 1;
                state: function() {
                stateString = tuple[ 3 ];
                statusCode: function( map ) {
                statusText = nativeStatusText;
                stopped = true;
                String.fromCharCode( high + 0x10000 ) :
                String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
                style.display = "inline-block";
                style.maxWidth = maxWidth;
                style.minWidth = minWidth;
                style.minWidth = style.maxWidth = style.width = ret;
                style.overflow = opts.overflow[ 0 ];
                style.overflowX = opts.overflow[ 1 ];
                style.overflowY = opts.overflow[ 2 ];
                style.removeAttribute( "filter" );
                style.width = width;
                style.zoom = 1;
                style[ name ] = "inherit";
                styles = getStyles( elem );
                support.getById && context.nodeType === 9 && documentIsHTML &&
                tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
                target = this,
                target.appendChild( elem );
                target.insertBefore( elem, target.firstChild );
                temp = remaining / animation.duration || 0,
                then: function( /* fnDone, fnFail, fnProgress */ ) {
                this :
                this.each( function( i ) {
                this.empty().append(
                this.empty().append( value );
                this.off( type, selector, types[ type ] );
                this.parentNode.insertBefore( elem, this );
                this.parentNode.insertBefore( elem, this.nextSibling );
                this.value = val;
                this[ name ] = undefined;
                timeoutTimer = window.setTimeout( function() {
                timers = jQuery.timers,
                timers = jQuery.timers,
                tmp = [],
                tmp = cur;
                tmp = safe.lastChild;
                tmp = tmp || safe.appendChild( context.createElement( "div" ) );
                tmp.empty.add( resolve );
                tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
                tmp.textContent = "";
                tokens.push({
                top = window.frameElement == null && document.documentElement;
                transport.send( requestHeaders, done );
                try {
                try {
                tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
                tween.elem[ tween.prop ] = tween.now;
                type = "number";
                type: match[0].replace( rtrim, " " )
                type: type,
                type: type,
                undefined;
                unmatched = seed && [],
                unquoted = !match[6] && match[2];
                val += "";
                val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
                val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
                val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
                val = "";
                val = jQuery.map( val, function( value ) {
                val = value.call( this, i, jQuery( this ).val() );
                val = value;
                val.value :
                value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
                value = adjustCSS( elem, name, ret );
                value = callback( elems[ i ], i, arg );
                value = callback( elems[ i ], i, arg );
                value = jQuery.htmlPrefilter( value );
                value: matched,
                values[ index ] =
                var anim = Animation( this, jQuery.extend( {}, prop ), optall );
                var doc = this.ownerDocument || this,
                var doc = this.ownerDocument || this,
                var doc;
                var elem = e.target,
                var elem = e.target;
                var elem = this;
                var elemLang;
                var index = 0,
                var m = context.getElementById( id );
                var node = typeof elem.getAttributeNode !== "undefined" &&
                var optionSet, option,
                var queue = jQuery.queue( this, type, data );
                var result = Sizzle.attr( elem, name );
                var tabindex = jQuery.find.attr( elem, "tabindex" );
                var target = manipulationTarget( this, elem );
                var target = manipulationTarget( this, elem );
                var tween = jQuery.Tween( elem, animation.opts, prop, end,
                var val = jQuery.find.attr( elem, "value" );
                var value, option,
                while ( ( className = classNames[ i++ ] ) ) {
                while ( (b = b.parentNode) ) {
                while ( (elem = elem[ dir ]) ) {
                while ( (elem = elem[ dir ]) ) {
                while ( (elem = results[i++]) ) {
                while ( (matcher = setMatchers[j++]) ) {
                while ( ++firingIndex < list.length ) {
                while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
                while ( i-- ) {
                while ( i-- ) {
                while ( j-- ) {
                while ( tmp.firstChild ) {
                width = style.width;
                win.scrollTo(
                window.clearTimeout( timeoutTimer );
                window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
                window[ callbackName ] = overwritten;
                wrap = wrapMap[ tag ] || wrapMap._default;
                wrap.insertBefore( this[ 0 ] );
                {};
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                }
                } )();
                } );
                } );
                } );
                } :
                } catch ( e ) {}
                } catch ( e ) {}
                } else if ( (m = match[3]) && support.getElementsByClassName &&
                } else if ( context.nodeName.toLowerCase() !== "object" ) {
                } else if ( copy !== undefined ) {
                } else if ( match[2] ) {
                } else if ( status === 304 ) {
                } else {
                } else {
                } else {
                } else {
                } else {
                } else {
                } else {
                } else {
                } else {
                } else {
                } else {
                } else {
                } while ( (elem = elem.parentNode) && elem.nodeType === 1 );
                }) :
                });
                });
                },
                },
                },
                },
                },
                },
                },
                },
                },
                }, s.timeout );
                }, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
                };
                };
                };
                };
                };
                };
            !elem.getClientRects().length ) :
            !jQuery.contains( elem.ownerDocument, elem );
            !refElements || jQuery._data( refElements[ i ], "globalEval" )
            !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
            "" :
            "* text": String,
            "*": allTypes,
            "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
            "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
            "-webkit-box-sizing:border-box;box-sizing:border-box;" +
            "Accept",
            "application/ecmascript, application/x-ecmascript"
            "globalEval",
            "margin:auto;border:1px;padding:1px;" +
            "pageX pageY screenX screenY toElement" ).split( " " ),
            "position:relative;display:block;" +
            "text html": true,
            "text json": jQuery.parseJSON,
            "text xml": jQuery.parseXML
            "top:1%;width:50%";
            "url" :
            ( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
            ( elem = elems[ i ] ) != null;
            ( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {
            ( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
            ( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
            ( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
            ( l > 1 && typeof value === "string" &&
            ( num < 0 ? this[ num + this.length ] : this[ num ] ) :
            ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
            ( support.boxSizingReliable() || val === elem.style[ name ] );
            ( text + "" ).replace( rtrim, "" );
            ( window.execScript || function( data ) {
            ( ~a.sourceIndex || MAX_NEGATIVE );
            ( ~b.sourceIndex || MAX_NEGATIVE ) -
            (!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
            (val = elem.getAttributeNode(name)) && val.specified ?
            )
            ) + "px";
            ) {
            ) {
            ));
            );
            );
            );
            );
            );
            );
            */
            +valueParts[ 2 ];
            .end().animate( { opacity: to }, speed, easing, callback );
            .replace( rhash, "" )
            .replace( rprotocol, ajaxLocParts[ 1 ] + "//" );
            /* jshint -W018 */
            /* jshint eqeqeq: false */
            /* matches from matchExpr["CHILD"]
            //   but not by others (comment: 8; processing instruction: 7; etc.)
            // #8545, #7054, preventing memory leaks for custom events in IE6-8
            // ( event )  dispatched jQuery.Event
            // ( types [, fn] )
            // ( types, data, fn )
            // ( types, selector, fn )
            // ( types-object [, selector] )
            // ( types-Object, data )
            // (avoids potential for endless recursion during removal of special event handlers)
            // (excepting DocumentFragment context, where the methods don't exist)
            // (for every problematic property) identical functions
            // (no matter how long the jqXHR object will be used)
            // (which is just equivalent to: $(context).find(expr)
            // ...except when executing function values
            // .cssText, that would destroy case sensitivity in URL's, like in "background"
            // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
            // `i` is now the count of elements visited above, and adding it to `matchedCount`
            // A fallback to window.onload, that will always work
            // A fallback to window.onload, that will always work
            // A tribute to the "awesome hack by Dean Edwards"
            // Abort any current/pending executions
            // Abort any pending executions
            // Abort if not done already and return
            // Abort if we hit a combinator
            // Accept quoted arguments as-is
            // Accessing this property makes selected-by-default
            // Add a callback or a collection of callbacks to the list
            // Add a progress sentinel to prevent the fx queue from being
            // Add anti-cache in url if needed
            // Add elem as a property of the handle fn to prevent a memory leak
            // Add elements passing elementMatchers directly to results
            // Add nodes directly
            // Add offsetParent borders
            // Add relatedTarget, if necessary
            // Add to the element's handler list, delegates in front
            // Add which for click: 1 === left; 2 === middle; 3 === right
            // Add which for key events
            // Adjust and apply
            // also - reusing 'index' from above because we have the correct "name"
            // Also disable .add unless we have memory (since it would have no effect)
            // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
            // and let the cache object itself get destroyed
            // animate to the value specified
            // Apply set filters to unmatched elements
            // arguments are needed to create the filter function
            // at this point, extra isn't border nor margin, so remove border
            // at this point, extra isn't content nor padding, so add border
            // at this point, extra isn't content, so add padding
            // attempt a parseFloat and fallback to a string if the parse fails
            // attempt to remove filter attribute #6652
            // automatically dequeued
            // available and use plain properties where available
            // Avoid hanging onto element (issue #299)
            // before this completes
            // being emptied incorrectly in certain situations (#8070).
            // being hidden by cascaded rules or not
            // Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
            // block-level elements need to be inline with layout
            // Boolean attributes and "value" are not treated correctly
            // border-box includes padding, so remove it if we want content
            // Break association with cloned elements by also using setAttribute (#9646)
            // Building a settings object
            // Bulk operations run against the entire set
            // but it would mean to define eight
            // But maintain support for old signatures
            // but only if they were gotoEnd
            // but width seems to be reliably pixels
            // Cache response headers
            // Cache the tokens
            // Calculate pageX/Y if missing and clientX/Y available
            // Call all callbacks with the given context and arguments
            // Call all the callbacks with the given arguments
            // Call if it was a function and we have a response
            // Callbacks context
            // Called once
            // Can add propHook for "elements" to filter or add form elements
            // Can use an empty set, since event contains the info
            // Can't trust NodeList.length
            // case, which will result in a "00" `matchedCount` that differs from `i` but is also
            // Check if a given callback is in the list.
            // Check to see if it's possible to do matchesSelector
            // Choose the first element that is related to our preferred document
            // Chrome < 17 and Safari 5.0 uses "computed value"
            // Clean up if we're done firing for good
            // Clear all callbacks and values
            // Clear timeout if it exists
            // clear up the last queue stop function
            // Complete
            // complex values such as "rotate(1rad)" are returned as is.
            // Context for global events is callbackContext if it is a DOM node or jQuery collection
            // continually check to see if the document is ready
            // Convert "+=" or "-=" to relative numbers (#7345)
            // Convert anything to text
            // Convert html into DOM nodes
            // Convert no matter what (that way responseXXX fields are always set)
            // Convert non-html into a text node
            // Convert response if prev dataType is non-auto and differs from current
            // Create the final options object
            // Cross-domain detection vars
            // Default abort message
            // deferred[ resolve | reject | notify ]
            // Deferreds
            // Delegated event; lazy-add a change handler on descendant inputs
            // Dereference transport for early garbage collection
            // detachEvent needed property on element, by name of that event,
            // Determine if successful
            // Disable .fire
            // Disable .fire and .add
            // Div with explicit width and no margin-right incorrectly
            // Do a sibling check if the nodes have a common ancestor
            // Do not traverse comment nodes
            // DocumentFragment nodes don't have gEBTN
            // doing this makes sure that the complete handler will be called
            // don't match elem in the :animated selector
            // Empty strings, null, undefined and "auto" are converted to 0.
            // empty the queue first
            // enable finishing flag on private data
            // Enforce case-sensitivity of name attribute
            // Enforce single-firing
            // Ensure firing before onload, maybe late but safe also for iframes
            // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
            // Evaluate text as a json expression
            // Execute callbacks for all pending executions,
            // Extend the base object
            // Extending ajaxSettings
            // Fake xhr
            // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
            // Filter out possible comments
            // Fire native event if possible so blur/focus sequence is correct
            // Fix #11809: Avoid leaking memory
            // Fix all IE cloning issues
            // Fix name and attach hooks
            // Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
            // For checkbox, fire native event so checked state will be right
            // For cross-browser consistency, don't fire native .click() on links
            // For each dataType in the dataTypeExpression
            // For mouseenter/leave call the handler if related is outside the target.
            // for such an element
            // Force it by setting the zoom level
            // Forget the data if we're done with it
            // Gecko does not error, returns false instead
            // Get *real* offsetParent
            // Get correct offsets
            // Get initial elements from seed or context
            // Get response data
            // gets computed margin-right based on width of container (#3333)
            // Gets one value
            // Handle it asynchronously to allow scripts the opportunity to delay ready
            // Handle state
            // HANDLE: $(expr, $(...))
            // HANDLE: $(expr, context)
            // handleObj is passed to all event handlers
            // Headers (they are sent all at once)
            // Hook needed; redefine it so that the support test is not executed again.
            // http://bugs.jquery.com/ticket/12359
            // http://dev.w3.org/csswg/cssom/#resolved-values
            // http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
            // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
            // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
            // http://www.w3.org/TR/selectors/#empty-pseudo
            // http://www.w3.org/TR/selectors/#pseudo-classes
            // https://bugs.webkit.org/show_bug.cgi?id=136851
            // IE 9's matchesSelector returns false on disconnected nodes
            // IE has trouble with opacity if it does not have layout
            // IE uses filters for opacity
            // IE8 throws error here and will not see later tests
            // IE8 throws error here and will not see later tests
            // IE8,9 Will throw exceptions on certain host objects #9897
            // IE<8 needs the *property* name
            // If "type" variable is undefined, then "GET" method will be used.
            // If a hook was provided get the non-computed value from there
            // If a hook was provided, use that value, otherwise just set the specified value
            // If a number was passed in, add the unit (except for certain CSS properties)
            // If data is available, append data to url
            // If event changes its type, use the special event handlers for the changed type
            // If form was submitted by the user, bubble the event up the tree
            // If IE and not a frame
            // If it receives a jQuery object, the first element is used
            // If no argument is given, return whether or not list has callbacks attached.
            // If previous iteration zeroed out, double until we get *something*.
            // If previous value didn't exist - remove it
            // If request was aborted inside ajaxSend, stop there
            // If resolveValues consist of only a single Deferred, just use that.
            // If selector defined, determine special event api type, otherwise given type
            // If set returns undefined, fall back to normal setting
            // if setting opacity to 1, and no other filters exist -
            // If successful, handle type chaining
            // If the selector is sufficiently simple, try using a "get*By*" DOM method
            // If there is no data left in the cache, we want to continue
            // If this is a positional/relative selector, check membership in the returned set
            // If this is a select, ensure that it displays empty (#12336)
            // if value === "", then remove inline opacity #12685
            // If value is a function, invoke it and return its value
            // in a stylesheet to whatever the default browser style is
            // In CSS3, :checked should return both checked and selected elements
            // In-page `selector#id sibing-combinator selector` fails
            // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
            // Init the event handler queue if we're the first
            // inline-level elements accept inline-block;
            // instead of "used value" for margin-right
            // instead of the first because it can end up
            // jQuery handler
            // just as Sizzle does
            // Keep track of which events have ever been used, for event optimization
            // lang value must be a valid identifier
            // Lazy-add a submit handler when a descendant form may potentially be submitted
            // look for any active animations, and finish them
            // look for any animations in the old queue and finish them
            // Loop variable
            // Maintain original order
            // Make sure that null and NaN values aren't set. See: #7116
            // Make sure we set the data so it isn't changed later
            // Make value of this field explicit since
            // makes the latter nonnegative.
            // Match elements found at the specified indexes
            // Match html or make sure no context is specified for #id
            // Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
            // Move the given value to match[3] whether quoted or unquoted
            // Namespaced trigger; create a regexp to match event type in handle()
            // Native handler
            // NB: No relatedTarget if the mouse left/entered the browser window
            // no element matchers and no seed.
            // nodeType < 6 works because attributes (2) do not appear as children
            // Not own constructor property must be Object
            // not quite $.extend, this wont overwrite keys already present.
            // Note: button is not normalized, so don't use it
            // Note: IE uppercases css property names, but if we were to .toLowerCase()
            // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
            // Nothing should be selected when empty strings follow ^= or $= or *=
            // numerically zero.
            // on a disconnected node (IE 9)
            // Only add window if we got to document (e.g., not plain obj or detached DOM)
            // Only keep the most recent entries
            // Only need this for delegated form submit events
            // Only need this for delegated form submit events
            // Opera 10-11 does not throw on post-comma invalid pseudos
            // options in Safari work properly
            // or when there is no matching style property that exists.
            // other types prohibit arguments
            // Otherwise just get the value from the style object
            // Otherwise nodes in our document sort first
            // Otherwise restore preexisting value
            // Otherwise we know they are disconnected
            // otherwise, set new filter values
            // Override manipulation of globals by nested matchers
            // Parse text as xml
            // passing an empty string as a 3rd parameter to .css will automatically
            // Precompiled matchers will still verify ancestry, so step up a level
            // Prefilter to get matcher input, preserving a map for seed-results synchronization
            // Prevent IE 6 from affecting layout for positioned elements #11048
            // Prevent IE from shrinking the body in IE 7 mode #12869
            // Prevent triggered image.load events from bubbling to window.load
            // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
            // promise[ done | fail | progress ] = list.add
            // pseudo-class names are case-insensitive
            // Put in the new values to get a computed value out
            // rather than jQuery in Firefox
            // Remember that setFilters inherits from pseudos
            // Remember the original values
            // Remove a callback from the list
            // Remove all callbacks from the list
            // Remove any remaining nodes
            // Remove boolean attributes when set to false
            // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
            // Remove duplicates
            // Remove element nodes and prevent memory leaks
            // Remove generic event handler if we removed something and no more handlers exist
            // Remove matching events
            // removeData also checks for emptiness and clears the expando if empty
            // Reset CSS: box-sizing; display; margin; border
            // Reset CSS: box-sizing; display; margin; border; padding
            // Reset the inline display of this element to learn if it is
            // respecting firingIndex overrides and runtime changes
            // Response headers
            // Response headers as string
            // Return all the elements in a clean array
            // Return just the one element from the set
            // Return only captures needed by the pseudo filter method (type and argument)
            // Return special upon seeing a positional matcher
            // Return undefined in the case of empty string
            // return undefined since we don't need an event listener
            // Reverse order for parents* and prev-derivatives
            // Revert the changed values
            // Safari 5.1.7 (at least) returns percentage for a larger set of values,
            // Save back as free
            // Save response for use in complete callback
            // See if we can take a shortcut and just use innerHTML
            // Select is set to empty string on purpose
            // Send global event
            // Set data for the fake xhr object
            // Set elements which have been overridden with display: none
            // Set readyState
            // Set the existing or create a new attribute node
            // Sets one value
            // setting a boolean content attribute,
            // since its presence should be enough
            // since that compresses better and they're computed together anyway.
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            // so use it instead of delete
            // so, simple values such as "10px" are parsed to Float.
            // Some styles come back with percentage values, even though they shouldn't
            // spaces as combinators
            // Speed up dequeue by getting out quickly if this is just a lookup
            // start the next in the queue if the last step wasn't forced
            // State is "done" now
            // Status-dependent callbacks
            // Status-dependent callbacks
            // Strip excess characters from unquoted arguments
            // Success/Error
            // Support array or space separated string names for data keys
            // Support: Android 2.3
            // Support: Android 2.3
            // Support: Android 2.3 only
            // Support: Android 4.0 - 4.3 only
            // Support: Android 4.0-4.3
            // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
            // Support: IE
            // Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
            // Support: IE8
            // Support: IE8
            // Support: IE8, Opera 11-12.16
            // Support: IE<8
            // Support: IE<9
            // Support: IE<9
            // Support: IE<9, Safari
            // Support: Safari 8+, iOS 8+
            // Support: Windows 8 Native Apps
            // Swallow native change events from checkbox/radio, we already triggered them above
            // Take advantage of querySelectorAll
            // Test fired too early or in an unsupported environment, exit.
            // Text to html (true = no transformation)
            // the count of uncompleted subordinates
            // The elements to wrap the target around
            // The jqXHR state
            // the master Deferred.
            // The test attribute must be unknown in Opera but "safe" for WinRT
            // The type and name attributes are restricted during .innerHTML assignment
            // The user may use createPseudo to indicate that
            // There *must* be a type, no attaching namespace-only handlers
            // There's only work to do if current dataType is non-auto
            // this is against the CSSOM draft spec:
            // This is to test IE's treatment of not explicitly
            // This should fail with an exception
            // Timeout
            // timeout handle
            // timers currently will call their complete callbacks, which will dequeue
            // to avoid treating leading and trailing
            // To know if global events are to be dispatched
            // To know if the callbacks have already been called at least once
            // to properly expose it to GC
            // Toggle whole class name
            // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
            // Traverse its children
            // Treat null/undefined as ""; convert numbers to string
            // Trim the selector passed to compile
            // Try to fetch any internally stored data first
            // Try to find the camelCased property
            // try/catch handles cases where IE balks (such as removing a property on window)
            // turn off finishing flag
            // Un-match failing elements by moving them back to matcherIn
            // Unbind all events (on this namespace, if provided) for the element
            // Update function for both resolve and progress values
            // Update special based on newly reset type
            // URL without anti-cache param
            // Use .is(":disabled") so that fieldset[disabled] works
            // Use a property on the element directly when it is not a DOM element,
            // Use defaultChecked and defaultSelected for oldIE
            // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
            // use step hook for back compat - use cssHook if its there - use .style if its
            // Use string for doubling so we don't accidentally see scale as unchanged below
            // Use the already-created iframe if possible
            // Use the handy event callback
            // Use the original fragment for the last item
            // user can override it through ajaxSetup method
            // Vendor-prefix box-sizing
            // we assume that getBoundingClientRect is available when computed position is fixed
            // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
            // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
            // We use an anonymous function so that context is window
            // We use execScript on Internet Explorer
            // We're checking for pixelPositionVal here instead of boxSizingReliableVal
            // we're done with this property
            // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
            // Webkit/Opera - :checked should return selected option elements
            // with IE non-native events
            0;
            1;
            [ event ] :
            ],
            _default: function( event ) {
            a.compareDocumentPosition( b ) :
            abort: function() {
            access( elems, fn, i, key[ i ], true, emptyGet, raw );
            add( this.name, this.value );
            add: function() {
            adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
            ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
            ajaxExtend( jQuery.ajaxSettings, target );
            anim.always( function() {
            anim.always( function() {
            anim.done( function() {
            anim: animation,
            Animation.prefilters.push( callback );
            Animation.prefilters.unshift( callback );
            Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
            Animation.tweeners[ prop ].unshift( callback );
            ap = [ a ],
            ap.unshift( cur );
            ap[i] === preferredDoc ? -1 :
            args = slice.call( arguments ),
            attributes = support.attributes,
            attrNames = value && value.match( rnotwhite );
            attrs = elem && elem.attributes;
            aup = a.parentNode,
            body.style.zoom = 1;
            box = elem.getBoundingClientRect();
            box = { top: 0, left: 0 },
            boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";
            bp = [ b ];
            bp.unshift( cur );
            bp[i] === preferredDoc ? 1 :
            break;
            bubbleType = special.delegateType || type;
            bubbleType, special, tmp, i,
            buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
            buildParams( prefix, a[ prefix ], traditional, add );
            bup = b.parentNode,
            cache = jQuery.cache,
            cache[ id ] = jQuery.extend( cache[ id ], name );
            cache[ id ].data = jQuery.extend( cache[ id ].data, name );
            cached = matcherFromTokens( match[i] );
            cacheURL,
            callback = data;
            callback = props;
            callbackContext = s.context || s,
            callbackExpect = !invert;
            callbackInverse = !callback( elems[ i ], i );
            checkContext = null;
            class2type[ toString.call( obj ) ] || "object" :
            classes = value.match( rnotwhite ) || [];
            classes = value.match( rnotwhite ) || [];
            clearQueue = type;
            clone = elem.cloneNode( true );
            completeDeferred = jQuery.Callbacks( "once memory" ),
            completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
            contents = div.appendChild( document.createElement( "div" ) );
            contents = div.getElementsByTagName( "td" );
            contents.style.cssText = div.style.cssText =
            contents.style.marginRight = contents.style.width = "0";
            contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
            context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
            context = fn;
            context.getElementsByTagName( tag || "*" ) :
            context: true
            continue;
            continue;
            continue;
            continue;
            converters[ conv.toLowerCase() ] = s.converters[ conv ];
            count = 1,
            createStandardXHR() || createActiveXHR();
            createTween: function( prop, end ) {
            cssFn.apply( this, arguments ) :
            ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
            cur = event.target;
            curElem = jQuery( elem ),
            curElem.css( props );
            curLeft = curPosition.left;
            curLeft = parseFloat( curCSSLeft ) || 0;
            curPosition = curElem.position();
            curTop = curPosition.top;
            curTop = parseFloat( curCSSTop ) || 0;
            data = data || selector;
            data = selector;
            data = type;
            data = undefined;
            data = undefined;
            data = undefined;
            data.finish = true;
            data: data,
            data: params
            dataShow = jQuery._data( elem, "fxshow", {} );
            dataShow.hidden = !hidden;
            dataType: "html",
            dataType: type,
            dataTypeExpression = "*";
            dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
            dataTypes.unshift( finalDataType );
            defer = jQuery.Deferred(),
            deferred = jQuery.Deferred(),
            deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
            deferred = {};
            deferred.notifyWith( elem, [ animation, percent, remaining ] );
            deferred.resolveWith( resolveContexts, resolveValues );
            deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
            deferred[ tuple[ 0 ] ] = function() {
            delegateCount = handlers.delegateCount,
            delegateType: "focusin"
            delegateType: "focusout"
            delete cache[ keys.shift() ];
            delete data.finish;
            delete elemData.handle;
            delete hooks.stop;
            delete hooks.stop;
            delete props[ index ];
            delete props[ name ];
            delete props[ prop ];
            delete tick.elem;
            depth = 0;
            dest.innerHTML = src.innerHTML;
            dest.outerHTML = src.outerHTML;
            dest.value = src.value;
            destElements = getAll( clone );
            disable: function() {
            disabled: function() {
            display = actualDisplay( nodeName, doc );
            display = undefined;
            div.appendChild( document.createElement( "div" ) ).style.width = "5px";
            div.appendChild( input ).setAttribute( "name", "D" );
            div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            div.parentNode.removeChild( div );
            div.querySelectorAll("*,:x");
            div.removeChild( contents );
            div.setAttribute( eventName, "t" );
            div.style.cssText =
            div.style.display = "";
            div.style.marginRight = "50%";
            div.style.width = "1px";
            divStyle = window.getComputedStyle( div );
            doAnimation = function() {
            doAnimation.finish = doAnimation;
            doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;
            doc = elem && elem.ownerDocument;
            doc.close();
            doc.write();
            docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
            document.addEventListener( "DOMContentLoaded", completed );
            document.attachEvent( "onreadystatechange", completed );
            documentElement = document.documentElement;
            domManip( self, args, callback, ignored );
            done( -1, "No Transport" );
            duration: options.duration,
            e.preventDefault();
            e.returnValue = false;
            e.stopImmediatePropagation();
            e.stopPropagation();
            easing = value[ 1 ];
            elem = this[ 0 ],
            elem = this[ 0 ],
            elem = this[ 0 ];
            elem = this[ 0 ];
            elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
            elem,
            elem,
            elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
            elem.contentDocument || elem.contentWindow.document :
            elem.defaultView || elem.parentWindow :
            elem.detachEvent( name, handle );
            elem.getAttribute( name ) :
            elem.jquery ? elem[ 0 ] : elem, this );
            elem.removeEventListener( type, handle );
            elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );
            elem.setAttribute( name, value + "" );
            elem.style.display = show ? values[ index ] || "" : "none";
            elem.style.position = "relative";
            elem: elem,
            elem: elem,
            elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
            elemData = jQuery._data( elem );
            elemData = jQuery.hasData( elem ) && jQuery._data( elem );
            elements = this,
            elems = i === last ? this : this.clone( true );
            elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
            empty: function() {
            empty: jQuery.Callbacks( "once memory" ).add( function() {
            escaped :
            event :
            event,
            event.currentTarget = matched.elem;
            event.preventDefault();
            event.target = elem;
            event.target = event.target.parentNode;
            event.target = originalEvent.srcElement || document;
            event.type = i > 1 ?
            event[ prop ] = originalEvent[ prop ];
            eventHandle = elemData.handle = function( e ) {
            eventHandle.elem = elem;
            eventPath = [ elem || document ],
            events = elemData.events = {};
            extra || ( isBorderBox ? "border" : "content" ),
            factory( global, true ) :
            false
            false;
            filterHidden( elem );
            fire: function() {
            fired = firing = true;
            fired: function() {
            fireGlobals,
            fireWith: function( context, args ) {
            firing = false;
            first[ i++ ] = second[ j++ ];
            fixHook = this.fixHooks[ type ];
            fn = data;
            fn = data;
            fn = queue.shift(),
            fn = queue.shift();
            fn = returnFalse;
            fn = selector;
            fn = tmp;
            fn( elem, name, !documentIsHTML ) :
            fn.call( elem, next, hooks );
            fn.call( elems ) :
            for ( ; ++i < length; ) {
            for ( ; --i >= 0; ) {
            for ( ; cur != this; cur = cur.parentNode || this ) {
            for ( ; cur; cur = cur.parentNode ) {
            for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
            for ( ; i < 4; i++ ) {
            for ( ; i < l; i++ ) {
            for ( ; i < len; i++ ) {
            for ( ; i < length; i += 2 ) {
            for ( ; i < length; i += 2 ) {
            for ( ; i < length; i++ ) {
            for ( ; i < length; i++ ) {
            for ( ; i < length; i++ ) {
            for ( ; i < length; i++ ) {
            for ( ; index < length ; index++ ) {
            for ( ; queue.length; firingIndex = -1 ) {
            for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
            for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
            for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
            for ( i = 0, l = events[ type ].length; i < l; i++ ) {
            for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {
            for ( i = 0; i < len; i++ ) {
            for ( i in elems ) {
            for ( i in obj ) {
            for ( index = 0; index < length; index++ ) {
            for ( index = timers.length; index--; ) {
            for ( index = timers.length; index--; ) {
            for ( index in value ) {
            for ( key in obj ) {
            for ( name in options ) {
            for ( prop in orig ) {
            for ( type in types ) {
            fragment = first = null;
            fragment = first;
            fragmentDiv.innerHTML = elem.outerHTML;
            fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
            func = dataTypeExpression;
            func.call( deferred, deferred );
            function( w ) {
            function() { return jQuery.css( elem, prop, "" ); },
            function() { return tween.cur(); } :
            get: function( elem ) {
            get: function( elem ) {
            get: function( elem ) {
            get: function( elem ) {
            get: function( elem, computed ) {
            globalEventContext = s.context &&
            gotoEnd = clearQueue;
            groups.push( (tokens = []) );
            handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
            handle = ontype && cur[ ontype ];
            handleObj = jQuery.extend( {
            handleObj = types.handleObj;
            handleObjIn = handler;
            handler = handleObjIn.handler;
            handler.guid = jQuery.guid++;
            handlerQueue = [],
            handlerQueue = [],
            handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
            handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
            handlers = events[ type ] || [];
            handlers, type, namespaces, origType,
            has: function( fn ) {
            hasDuplicate = true;
            hasDuplicate = true;
            hasDuplicate = true;
            hasScripts = scripts.length;
            head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;
            hidden = isHidden( elem );
            high < 0 ?
            hooks = jQuery._queueHooks( elem, type ),
            hooks = jQuery.attrHooks[ name ] ||
            hooks = jQuery.propHooks[ name ];
            hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
            hooks = Tween.propHooks[ this.prop ];
            hooks.empty.fire = function() {
            hooks.empty.fire();
            hooks.get( this ) :
            hooks.set( this );
            hooks.unqueued = 0;
            html: "text/html",
            html: /\bhtml/,
            i = 0,
            i = 0,
            i = 0,
            i = 0,
            i = 0,
            i = 0,
            i = 0,
            i = 0,
            i = 0;
            i = 0;
            i = 0;
            i = 0;
            i = first.length;
            i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;
            i = name.length;
            i = temp.length;
            i = this.length,
            i++
            i++;
            i,
            id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
            id = internalKey;
            if (
            if ( !( handlers = events[ type ] ) ) {
            if ( !( prop in dataShow ) ) {
            if ( !context ) {
            if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
            if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
            if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
            if ( !div.querySelectorAll(":checked").length ) {
            if ( !div.querySelectorAll(":enabled").length ) {
            if ( !div.querySelectorAll("[selected]").length ) {
            if ( !event.relatedTarget && fromElement ) {
            if ( !event.which && button !== undefined ) {
            if ( !filter || filter( elem, context, xml ) ) {
            if ( !firstDataType ) {
            if ( !guaranteedUnique[ name ] ) {
            if ( !hooks || !( "set" in hooks ) ||
            if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
            if ( !isXML ) {
            if ( !isXML ) {
            if ( !isXML ) {
            if ( !jQuery.isArray( name ) ) {
            if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
            if ( !jQuery.nodeName( this, "body" ) ) {
            if ( !options.memory ) {
            if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
            if ( !responseContainer ) {
            if ( !ret ) {
            if ( !rfocusMorph.test( bubbleType + type ) ) {
            if ( !ridentifier.test(lang || "") ) {
            if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
            if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
            if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
            if ( !tag || jQuery.nodeName( elem, tag ) ) {
            if ( !type ) {
            if ( !type ) {
            if ( !values[ index ] && display === "none" ) {
            if ( "hidden" in dataShow ) {
            if ( ( value >= 1 || value === "" ) &&
            if ( (find = Expr.find[ type ]) ) {
            if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
            if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
            if ( b ) {
            if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
            if ( bySet && i !== matchedCount ) {
            if ( cached[ expando ] ) {
            if ( callbackInverse !== callbackExpect ) {
            if ( computed ) {
            if ( computed ) {
            if ( conditionFn() ) {
            if ( contents.length ) {
            if ( contents[ type ] && contents[ type ].test( ct ) ) {
            if ( cur === b ) {
            if ( current === "*" ) {
            if ( data ) {
            if ( deepDataAndEvents ) {
            if ( dequeue || !gotoEnd ) {
            if ( display && display !== "none" || !hidden ) {
            if ( div.querySelectorAll("[msallowcapture^='']").length ) {
            if ( div.querySelectorAll("[name=d]").length ) {
            if ( elem ) {
            if ( elem ) {
            if ( elem === results[ i ] ) {
            if ( elem.nodeType === 1 &&
            if ( elem.nodeType === 1 ) {
            if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
            if ( elem.parentNode ) {
            if ( elem.style.display === "" && isHidden( elem ) ) {
            if ( event._submitBubble ) {
            if ( event.pageX == null && original.clientX != null ) {
            if ( event.which == null ) {
            if ( Expr.relative[ (type = token.type) ] ) {
            if ( extra !== "margin" ) {
            if ( extra !== "padding" ) {
            if ( extra === "content" ) {
            if ( fireGlobals ) {
            if ( fireGlobals ) {
            if ( fireGlobals ) {
            if ( fn.length > 1 ) {
            if ( fn[ expando ] ) {
            if ( forceAcceptData || acceptData( elem ) ) {
            if ( handle && handle.apply && acceptData( cur ) ) {
            if ( handle ) {
            if ( hasScripts ) {
            if ( hooks && "get" in hooks &&
            if ( hooks && "set" in hooks &&
            if ( hooks && "set" in hooks &&
            if ( hooks && hooks.stop ) {
            if ( ignored ) {
            if ( index ) {
            if ( indexOf ) {
            if ( isArrayLike( Object( arr ) ) ) {
            if ( isFunction ) {
            if ( isFunction ) {
            if ( isHidden( this ) ) {
            if ( isSuccess ) {
            if ( isSuccess ) {
            if ( jQuery.etag[ cacheURL ] ) {
            if ( jQuery.fx.step[ tween.prop ] ) {
            if ( jQuery.inArray( this, ignored ) < 0 ) {
            if ( jQuery.isArray( name ) ) {
            if ( jQuery.isArray( value ) ) {
            if ( jQuery.isFunction( result.stop ) ) {
            if ( jQuery.lastModified[ cacheURL ] ) {
            if ( jQuery.nodeName( elem, "input" ) ) {
            if ( jQuery.nodeName( this, "form" ) ) {
            if ( jQuery.nodeName( this, "form" ) ) {
            if ( jQuery.type( elem ) === "object" ) {
            if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
            if ( list[i] === elem ) {
            if ( locked ) {
            if ( match && ( match[ 1 ] || !context ) ) {
            if ( match ) {
            if ( match[1].slice( 0, 3 ) === "nth" ) {
            if ( match[2] === "~=" ) {
            if ( match[3] ) {
            if ( matcher[ expando ] ) {
            if ( matchExpr["CHILD"].test( match[0] ) ) {
            if ( name === "value" || value === elem.getAttribute( name ) ) {
            if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
            if ( obj.constructor &&
            if ( origCount && !handlers.length ) {
            if ( outermost ) {
            if ( outermost ) {
            if ( overwritten === undefined ) {
            if ( parent ) {
            if ( parent ) {
            if ( percent < 1 && length ) {
            if ( pixelPositionVal == null ) {
            if ( pixelPositionVal == null ) {
            if ( pixelPositionVal == null ) {
            if ( pixelPositionVal == null ) {
            if ( pixelPositionVal == null ) {
            if ( pixelPositionVal == null ) {
            if ( postFinder ) {
            if ( postFinder || preFilter ) {
            if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
            if ( raw ) {
            if ( reliableHiddenOffsetsVal ) {
            if ( responseContainer && jQuery.isFunction( overwritten ) ) {
            if ( responses ) {
            if ( ret && ret.specified ) {
            if ( ret || support.disconnectedMatch ||
            if ( rformElems.test( this.nodeName ) ) {
            if ( rparentsprev.test( name ) ) {
            if ( rsLeft ) {
            if ( rsLeft ) {
            if ( s.async && s.timeout > 0 ) {
            if ( s.cache === false ) {
            if ( s.data ) {
            if ( s[ callbackName ] ) {
            if ( selector ) {
            if ( selector.charAt( 0 ) === "<" &&
            if ( special.add ) {
            if ( state === 2 ) {
            if ( state === 2 ) {
            if ( stateString ) {
            if ( stopped ) {
            if ( support.qsa &&
            if ( tag === "*" ) {
            if ( this !== elem || event.isSimulated || event.isTrigger ||
            if ( this.length ) {
            if ( this.nodeType !== 1 ) {
            if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
            if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
            if ( this.parentNode ) {
            if ( this.parentNode ) {
            if ( this[ 0 ].parentNode ) {
            if ( timeoutTimer ) {
            if ( tmp && tmp.empty ) {
            if ( tmp === ( elem.ownerDocument || document ) ) {
            if ( top && top.doScroll ) {
            if ( traditional || rbracket.test( prefix ) ) {
            if ( truncate && jQuery( elem ).is( until ) ) {
            if ( tween.elem.nodeType !== 1 ||
            if ( type === "fx" ) {
            if ( type === "number" ) {
            if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
            if ( type === "string" ) {
            if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
            if ( typeof context.getElementsByTagName !== "undefined" ) {
            if ( typeof dataTypeOrTransport === "string" &&
            if ( typeof elem[ name ] === "undefined" ) {
            if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
            if ( val == null ) {
            if ( val === undefined ) {
            if ( value == null || value !== value ) {
            if ( value === ( hidden ? "hide" : "show" ) ) {
            if ( value === null ) {
            if ( value === undefined ) {
            if ( win ) {
            if ( xml ) {
            iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
            iframe.detach();
            index = 0,
            initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
            initialInUnit = initialInUnit / scale;
            inPage = jQuery.contains( elem.ownerDocument, elem );
            input.setAttribute( "type", "hidden" );
            insert = jQuery( selector ),
            internalKey = jQuery.expando,
            isSuccess = status >= 200 && status < 300 || status === 304;
            j = +i + ( i < 0 ? len : 0 );
            j = 0,
            j = 0;
            j = 0;
            jQuery( document ).off( "ready" );
            jQuery( document ).triggerHandler( "ready" );
            jQuery( elem ).show();
            jQuery( insert[ i ] )[ original ]( elems );
            jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
            jQuery( types.delegateTarget ).off(
            jQuery().off( event );
            jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;
            jQuery._removeData( elem, "events" );
            jQuery._removeData( elem, "fxshow" );
            jQuery.cleanData( getAll( node ) );
            jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
            jQuery.data( elem, key, data );
            jQuery.dequeue( this, opt.queue );
            jQuery.dequeue( this, type );
            jQuery.event.add( this, "beforeactivate._change", function( e ) {
            jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
            jQuery.event.global[ type ] = true;
            jQuery.event.remove( this, "._change" );
            jQuery.event.remove( this, "._submit" );
            jQuery.event.remove( this, types, fn, selector );
            jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
            jQuery.event.trigger( "ajaxStart" );
            jQuery.event.trigger( type, data, this );
            jQuery.find( selector, self[ i ], ret );
            jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
            jQuery.globalEval( text );
            jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;
            jQuery.isFunction( speed ) && speed,
            jQuery.makeArray( data, [ event ] );
            jQuery.merge( [], elem.childNodes );
            jQuery.queue( this, type, [] );
            jQuery.ready( true );
            jQuery.readyWait++;
            jQuery.removeAttr( elem, name );
            jQuery.removeAttr( this, name );
            jQuery.removeData( this, key );
            jQuery.removeEvent( dest, e, data.handle );
            jQuery.style( elem, prop, initialInUnit + unit );
            jQuery.uniqueSort(
            jqXHR = {
            jqXHR.readyState = 1;
            jqXHR.readyState = status > 0 ? 4 : 0;
            jqXHR.setRequestHeader( "Content-Type", s.contentType );
            jqXHR.setRequestHeader( i, s.headers[ i ] );
            jqXHR.status = status;
            jqXHR.statusCode( statusCode );
            jqXHR.statusText = ( nativeStatusText || statusText ) + "";
            jqXHR[ i ]( s[ i ] );
            jqXHR[ s.responseFields[ current ] ] = response;
            json: "application/json, text/javascript"
            json: "responseJSON"
            json: /\bjson\b/
            l = this.length,
            lang = lang.replace( runescape, funescape ).toLowerCase();
            last = insert.length - 1;
            left = style.left;
            left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
            left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
            len = arr.length;
            len = list.length;
            len = self.length;
            len = targets.length;
            length = elems.length,
            length = elems.length;
            length = obj.length;
            length = props.length;
            length = resolveValues.length,
            length ? fn( elems[ 0 ], key ) : emptyGet;
            lock: function() {
            locked = options.once;
            locked: function() {
            match = tokenize( selector );
            match[1] = match[1].replace( runescape, funescape );
            match[1] = match[1].toLowerCase();
            match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
            matched = [],
            matched = match.shift();
            matched.push( elem );
            matched.push( n );
            matchedCount += i;
            matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
            matcher( matcherIn, matcherOut, context, xml );
            matcherIn = preFilter && ( seed || !selector ) ?
            matcherOut = condense(
            matcherOut = matcher ?
            matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
            matchers.push( matcher );
            matches = [],
            matches.call( div, "[s!='']:x" );
            name = jQuery.propFix[ name ] || name;
            name = name.toLowerCase();
            name,
            namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
            namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
            namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
            namespaces = type.split( "." );
            namespaces, origType,
            namespaces.sort();
            new jQuery.Event( type, typeof event === "object" && event );
            new jQuery.Event(),
            new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
            next = function() {
            noBubble: true
            node.parentNode.removeChild( node );
            nodeHook.set( elem, value === "" ? false : value, name );
            nType = elem.nodeType;
            nType = elem.nodeType;
            null;
            num = parseFloat( val );
            obj = type;
            offset = elem.getBoundingClientRect();
            offset = this.offset();
            offsetParent = this.offsetParent();
            oldfire = hooks.empty.fire;
            on( elem, type, selector, data, types[ type ], one );
            opt.old.call( this );
            optall = jQuery.speed( speed, easing, callback ),
            options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
            options = url;
            options.using.call( elem, props );
            opts: jQuery.extend( true, {
            orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
            origCount = j = handlers.length;
            origCount, t, events,
            originalEvent = event,
            originalOptions: options,
            originalProperties: properties,
            origName = jQuery.camelCase( name ),
            origName = jQuery.camelCase( name );
            parent.addEventListener( "unload", unloadHandler, false );
            parent.attachEvent( "onunload", unloadHandler );
            parentOffset = { top: 0, left: 0 },
            parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
            parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
            parts = rurl.exec( s.url.toLowerCase() );
            parts,
            pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";
            pixelPositionVal = ( divStyle || {} ).top !== "1%";
            pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
            position = jQuery.css( elem, "position" ),
            postDispatch: function( event ) {
            postFilter( temp, [], context, xml );
            postMap = [],
            preexisting = results.length,
            preMap = [],
            progressContexts = new Array( length );
            progressValues = new Array( length );
            progressValues, progressContexts, resolveContexts;
            promise = {
            promise[ tuple[ 1 ] ] = list.add;
            prop = copy[ i ];
            prop = props[ index ];
            props = [ "*" ];
            props = props.match( rnotwhite );
            props = {};
            props.left = ( options.left - curOffset.left ) + curLeft;
            props.top = ( options.top - curOffset.top ) + curTop;
            props: jQuery.extend( {}, properties ),
            props[ name ] = value;
            push.apply( ret, elems.get() );
            push_native.apply( target, slice.call(els) );
            queue = jQuery._data( elem, type );
            queue: animation.opts.queue
            raw = true;
            rbuggyMatches.push( "!=", pseudos );
            rbuggyQSA.push(",.*:");
            rcssNum.exec( jQuery.css( elem, prop ) );
            reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
            reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
            reliableMarginRightVal =
            remaining = length !== 1 ||
            remove: function() {
            requestHeaders = {},
            requestHeadersNames = {},
            resolve = function() {
            resolveContexts = new Array( length );
            resolveValues = slice.call( arguments ),
            response = ajaxConvert( s, response, jqXHR, isSuccess );
            response = arguments;
            response = s.dataFilter( response, s.dataType );
            responseContainer = arguments;
            responseContainer = overwritten = undefined;
            responseHeaders,
            responseHeadersString = headers || "";
            responseHeadersString,
            result = jQuery.css( tween.elem, tween.prop, "" );
            results.splice( duplicates[ j ], 1 );
            ret + "" || "auto";
            ret + "";
            ret += getText( node );
            ret :
            ret :
            ret = [],
            ret = [],
            ret = [];
            ret = jQuery.filter( selector, ret );
            ret = jQuery.style( elem, name );
            ret = style.pixelLeft + "px";
            ret = style[ name ];
            ret = thisCache[ jQuery.camelCase( name ) ];
            ret.value = value += "";
            return !!qualifier.call( elem, i, elem ) !== not;
            return !Expr.pseudos["empty"]( elem );
            return !result || result === "auto" ? 0 : result;
            return !rformElems.test( this.nodeName );
            return (
            return ( elem === qualifier ) !== not;
            return ( elem.style.cssText = value + "" );
            return ( elem[ name ] = value );
            return ( this.get = hookFn ).apply( this, arguments );
            return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
            return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
            return 0;
            return 0;
            return [ 0 ];
            return [ argument < 0 ? argument + length : argument ];
            return [ length - 1 ];
            return a === bup || !!( bup && bup.nodeType === 1 && (
            return a === document ? -1 :
            return access( this, function( elem, type, value ) {
            return box;
            return boxSizingReliableVal;
            return callback.call( elem, i, elem );
            return compare;
            return context.getElementsByClassName( className );
            return createActiveXHR();
            return createStandardXHR();
            return data;
            return elem === checkContext;
            return elem === docElem;
            return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
            return elem.defaultValue;
            return elem.disabled === false;
            return elem.disabled === true;
            return elem.getAttribute( "value" ) === null ? "on" : elem.value;
            return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
            return elem.nodeName.toLowerCase() === "input" &&
            return elem.nodeType === 1;
            return elem.selected === true;
            return elem.style.cssText || undefined;
            return elem.textContent;
            return elem[ name ] === true ? name.toLowerCase() :
            return elements ? jQuery.makeArray( elements ) : this;
            return event;
            return event;
            return event;
            return expanded;
            return extra === true || isFinite( num ) ? num || 0 : val;
            return false;
            return false;
            return false;
            return false;
            return false;
            return first === 1 && last === 0 ?
            return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
            return fn;
            return function( elem ) {
            return function( elem ) {
            return function( elem ) {
            return function( elem ) {
            return function( elem ) {
            return function( elem ) {
            return hash && hash.slice( 1 ) === elem.id;
            return indexOf( checkContext, elem ) > -1;
            return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
            return jQuery.event.trigger( type, data, elem, true );
            return jQuery.filter( qualifier, elements, not );
            return jQuery.inArray( this[ 0 ], jQuery( elem ) );
            return jQuery.prop( elem, name, value );
            return jQuery.queue( this[ 0 ], type );
            return jqXHR.abort();
            return jqXHR;
            return match.slice( 0, 3 );
            return match.slice( 0, 4 );
            return match;
            return matcher[ expando ] ?
            return matchIndexes;
            return matchIndexes;
            return matchIndexes;
            return matchIndexes;
            return name === "input" && elem.type === "button" || name === "button";
            return name;
            return nodeNameSelector === "*" ?
            return null;
            return obj + "";
            return offsetParent || documentElement;
            return options === undefined ?
            return origFn.apply( this, arguments );
            return pattern ||
            return pixelMarginRightVal;
            return pixelPositionVal;
            return queue || [];
            return reliableHiddenOffsetsVal;
            return reliableMarginLeftVal;
            return reliableMarginRightVal;
            return responseContainer[ 0 ];
            return result;
            return results;
            return ret;
            return ret;
            return ret;
            return ret;
            return ret;
            return rheader.test( elem.nodeName );
            return rinputs.test( elem.nodeName );
            return ropacity.test( ( computed && elem.currentStyle ?
            return setPositiveNumber( elem, value, extra ?
            return shrinkWrapBlocksVal;
            return siblingCheck( a, b );
            return sortInput ?
            return state ? this.show() : this.hide();
            return stateVal ? this.addClass( value ) : this.removeClass( value );
            return style[ name ];
            return swap( elem, { "display": "inline-block" },
            return text;
            return this.attr( "class", "" );
            return this.each( function( i ) {
            return this.each( function( i ) {
            return this.each( function( i ) {
            return this.each( function( j ) {
            return this.each( function( j ) {
            return this.each( function() {
            return this.name && !jQuery( this ).is( ":disabled" ) &&
            return this.pushStack( jQuery( selector ).filter( function() {
            return this;
            return this;
            return this;
            return this;
            return token;
            return true;
            return true;
            return true;
            return tween;
            return tween;
            return typeof root.ready !== "undefined" ?
            return undefined;
            return unmatched;
            return val == null ?
            return val;
            return value !== undefined ?
            return value === undefined ?
            return value;
            return {
            return;
            return;
            return;
            return;
            return;
            return;
            return;
            return;
            return;
            return;
            return;
            return;
            return;
            return;
            return;
            return;
            return;
            return;
            returnFalse;
            returnTrue :
            rs = elem.runtimeStyle;
            rsLeft = rs && rs.left;
            s = jQuery.ajaxSetup( {}, options ),
            s.crossDomain = !!( parts &&
            s.data = jQuery.param( s.data, s.traditional );
            s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
            s.jsonpCallback() :
            s.jsonpCallback;
            s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
            s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
            s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
            safeFrag.createElement(
            scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
            scale = scale || ".5";
            scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
            selector = handleObjIn.selector;
            selector = selector.slice( tokens.shift().value.length );
            selector = undefined;
            selector = undefined;
            selector = undefined;
            selector = until;
            self = this,
            self.each( function() {
            self.html( selector ?
            send: function( _, callback ) {
            set: function( elem, value ) {
            set: function( elem, value ) {
            set: function( elem, value ) {
            setDocument( context );
            setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
            setGlobalEval( tmp );
            setter--;
            setup: function() {
            shrinkWrapBlocksVal = div.offsetWidth !== 3;
            siblingCheck( ap[i], bp[i] ) :
            Sizzle.error( selector ) :
            slice.call( this );
            soFar = soFar.slice( matched.length );
            special = jQuery.event.special;
            special = jQuery.event.special[ event.type ] || {};
            special = jQuery.event.special[ type ] || {};
            special = jQuery.event.special[ type ] || {};
            special = jQuery.event.special[ type ] || {};
            special, eventHandle, handleObj,
            special, handlers, type,
            special.postDispatch.call( this, event );
            specialEasing[ name ] = easing;
            srcElements = getAll( elem );
            startLength = queue.length,
            startLength--;
            startTime: fxNow || createFxNow(),
            state = "pending",
            state = 0,
            state = 2;
            statusCode = s.statusCode || {},
            statusCode = undefined;
            stop( gotoEnd );
            stop: function( gotoEnd ) {
            strAbort = "canceled",
            style = elem.style;
            style = elem.style;
            style = elem.style;
            style.filter = ralpha.test( filter ) ?
            style.left = left;
            style.left = name === "fontSize" ? "1em" : ret;
            style.zoom = 1;
            styles
            success: callback
            support.disconnectedMatch = matches.call( div, "div" );
            support[ i ] = div.attributes[ eventName ].expando === false;
            target.length = j - 1;
            targets = jQuery( target, this ),
            teardown: function() {
            temp = condense( matcherOut, postMap );
            text = text.replace( runescape, funescape );
            text: "responseText",
            text: "text/plain",
            this :
            this,
            this.animate( genFx( name, true ), speed, easing, callback );
            this.context = selector.context;
            this.context = this[ 0 ] = selector;
            this.each( doAnimation ) :
            this.each( function() {
            this.each( function() {
            this.fixHooks[ type ] = fixHook =
            this.length = 1;
            this.off( selector, "**" ) :
            this.off( types, selector || "**", fn );
            this.on( name, null, data, fn ) :
            this.options.step.call( this.elem, this.now, this );
            this.pos = eased = jQuery.easing[ this.easing ](
            this.pos = eased = percent;
            this.prevObject : this.prevObject.filter( selector )
            this.queue( optall.queue, doAnimation );
            this.queue( type || "fx", [] );
            this.selector = selector.selector;
            this.trigger( name );
            thisCache.data = {};
            timeoutTimer,
            timers.splice( i--, 1 );
            tmp = fn[ context ];
            tmp = jQuery._data( elements[ i ], type + "queueHooks" );
            tmp = new window.DOMParser();
            tmp = rtypenamespace.exec( types[ t ] ) || [];
            tmp = rtypenamespace.exec( types[ t ] ) || [];
            tmp = tmp[ 2 ] &&
            toggle = toggle || value === "toggle";
            token = tokens[i];
            tokenCache( selector, groups ).slice( 0 );
            tokens.push({
            top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
            top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
            transport = undefined;
            transport,
            trigger: function() {
            trigger: function() {
            trigger: function() {
            try {
            try {
            try {
            try {
            tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
            tween.elem[ tween.prop ] = tween.now;
            tween.end = adjusted;
            Tween.propHooks._default.get( this );
            Tween.propHooks._default.set( this );
            tween.start = initialInUnit;
            tween.unit = unit;
            tweens: [],
            type = "fx";
            type = ( selector ? special.delegateType : special.bindType ) || type;
            type = ( selector ? special.delegateType : special.bindType ) || type;
            type = ( type || "fx" ) + "queue";
            type = event.type,
            type = hasOwn.call( event, "type" ) ? event.type : event,
            type = namespaces.shift();
            type = origType = tmp[ 1 ];
            type = origType = tmp[ 1 ];
            type = type || "fx";
            type = type || callback;
            type = typeof value;
            type = undefined;
            type = undefined;
            type: method,
            type: type || "GET",
            typeof context.querySelectorAll !== "undefined" ?
            typeof obj;
            typeof s.data === "string" &&
            typeof selector === "string" && rneedsContext.test( selector ) ?
            undefined;
            updateFunc = function( i, contexts, values ) {
            url = undefined;
            url: true,
            url: url,
            url: url,
            val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
            val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
            val = cssNormalTransform[ name ];
            val = curCSS( elem, name, styles );
            val = elem.style[ name ];
            val = hooks.get( elem, true, extra );
            val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
            value = hooks.expand( value );
            value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
            value = props[ index ] = value[ 0 ];
            valueIsBorderBox,
            var adown = a.nodeType === 9 ? a.documentElement : a,
            var args,
            var attr;
            var attrId = id.replace( runescape, funescape );
            var attrId = id.replace( runescape, funescape );
            var body, eventDoc, doc,
            var callback;
            var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
            var className, i, self, classNames;
            var currentTime = fxNow || createFxNow(),
            var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
            var dequeue = true,
            var elem = event.target;
            var elem = this[ 0 ] || {},
            var elem,
            var elem, j, matcher,
            var elements = jQuery.prop( this, "elements" );
            var excess,
            var hash = window.location && window.location.hash;
            var i = 0,
            var i = 0;
            var i = 1;
            var i = argument < 0 ? argument + length : argument;
            var i = argument < 0 ? argument + length : argument;
            var i = matchers.length;
            var index,
            var input = [],
            var input = document.createElement("input");
            var isSuccess, success, error, response, modified,
            var j = target.length,
            var j,
            var list = tuple[ 2 ],
            var name = elem.nodeName.toLowerCase();
            var nodeName = elem.nodeName.toLowerCase();
            var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
            var offsetParent = this.offsetParent;
            var oldCache, uniqueCache, outerCache,
            var parent = elem.parentNode;
            var parent = elem.parentNode;
            var parent = this.parentNode;
            var pattern = classCache[ className + " " ];
            var prop;
            var result;
            var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
            var ret = elem.getAttributeNode( name );
            var ret = elem.getAttributeNode( name );
            var ret = matches.call( elem, expr );
            var ret,
            var ret, handle;
            var ret;
            var self = collection.eq( index );
            var self = jQuery( this ),
            var simple = type.slice( 0, 3 ) !== "nth",
            var stop = hooks.stop;
            var style = elem.style,
            var styles = extra && getStyles( elem );
            var styles, len,
            var top = false;
            var tween = this.createTween( prop, value );
            var type = this.type;
            var val = jQuery( this ).val();
            var val;
            var win = getWindow( elem );
            var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
            view = window;
            while ( ( dataType = dataTypes[ i++ ] ) ) {
            while ( ( elem = this[ i++ ] ) ) {
            while ( ( elem = this[ i++ ] ) ) {
            while ( ( elem = tmp[ j++ ] ) ) {
            while ( ( handleObj = matched.handlers[ j++ ] ) &&
            while ( ( name = attrNames[ i++ ] ) ) {
            while ( (elem = elem[ dir ]) ) {
            while ( (target[j++] = els[i++]) ) {}
            while ( elem.firstChild ) {
            while ( i-- ) {
            while ( i-- ) {
            while ( i-- ) {
            while ( i-- ) {
            while ( j-- ) {
            while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
            while ( second[ j ] !== undefined ) {
            whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
            window.addEventListener( "load", completed );
            window.attachEvent( "onload", completed );
            window.clearTimeout( timeout );
            window.setTimeout( jQuery.ready );
            wrap.map( function() {
            xhrCallbacks[ key ]( undefined, true );
            xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
            xml = tmp.parseFromString( data, "text/xml" );
            xml.async = "false";
            xml.loadXML( data );
            xml: "application/xml, text/xml",
            xml: "responseXML",
            xml: /\bxml\b/,
            {
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            } )
            } ) );
            } ) :
            } )( data );
            } ).append( this );
            } );
            } );
            } );
            } );
            } );
            } );
            } );
            } );
            } );
            } );
            } );
            } );
            } );
            } catch ( e ) {
            } catch ( e ) {}
            } catch ( e ) {}
            } catch ( e ) {}
            } else if ( !context || context.jquery ) {
            } else if ( !rhtml.test( elem ) ) {
            } else if ( compiled ) {
            } else if ( jQuery.isArray( val ) ) {
            } else if ( match[3] ) {
            } else if ( prev !== "*" && prev !== current ) {
            } else if ( seekingTransport ) {
            } else if ( support.qsa ) {
            } else if ( tween.elem.nodeType === 1 &&
            } else if ( typeof val === "number" ) {
            } else if ( unquoted && rpseudo.test( unquoted ) &&
            } else if ( value === undefined || type === "boolean" ) {
            } else {
            } else {
            } else {
            } else {
            } else {
            } else {
            } else {
            } else {
            } else {
            } else {
            } else {
            } else {
            } else {
            } else {
            } else {
            } else {
            } else {
            } else {
            } else {
            } else {
            } else {
            } else {
            } else {
            } else {
            } else {
            });
            },
            },
            },
            },
            },
            },
            },
            },
            },
            },
            },
            },
            },
            },
            },
            },
            },
            },
            },
            }, handleObjIn );
            }, options ),
            }, type, chainable ? margin : undefined, chainable, null );
            };
            };
            };
            };
            };
            };
            };
            };
            };
            };
            };
            };
            };
            };
            };
        !compilerCache[ expr + " " ] &&
        !context || rsibling.test( selector ) && testContext( context.parentNode ) || context
        !documentIsHTML,
        !noData || noData !== true && elem.getAttribute( "classid" ) === noData;
        " ": { dir: "parentNode" },
        "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
        "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
        ")\\)|)",
        "*": [ function( prop, value ) {
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
        "*([*^$|!~]?=)" + whitespace +
        "*\\]",
        "+": { dir: "previousSibling", first: true },
        ".*" +
        ">": { dir: "parentNode", first: true },
        "animationIterationCount": true,
        "applet ": true,
        "ATTR": function( match ) {
        "ATTR": function( name, operator, check ) {
        "ATTR": new RegExp( "^" + attributes ),
        "bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
        "button": function( elem ) {
        "checked": function( elem ) {
        "CHILD": function( match ) {
        "CHILD": function( type, what, argument, first, last ) {
        "CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
        "class": "className"
        "CLASS": function( className ) {
        "CLASS": new RegExp( "^\\.(" + identifier + ")" ),
        "columnCount": true,
        "contains": markFunction(function( text ) {
        "details|dialog|figcaption|figure|footer|header|hgroup|main|" +
        "disabled": function( elem ) {
        "embed ": true,
        "empty": function( elem ) {
        "enabled": function( elem ) {
        "eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
        "even": createPositionalPseudo(function( matchIndexes, length ) {
        "fillOpacity": true,
        "first": createPositionalPseudo(function() {
        "flexGrow": true,
        "flexShrink": true,
        "float": support.cssFloat ? "cssFloat" : "styleFloat"
        "focus": function( elem ) {
        "fontWeight": true,
        "for": "htmlFor",
        "gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
        "has": markFunction(function( selector ) {
        "header": function( elem ) {
        "ID": new RegExp( "^#(" + identifier + ")" ),
        "input": function( elem ) {
        "lang": markFunction( function( lang ) {
        "last": createPositionalPseudo(function( matchIndexes, length ) {
        "lineHeight": true,
        "lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
        "mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        "metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),
        "needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
        "not": markFunction(function( selector ) {
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        "odd": createPositionalPseudo(function( matchIndexes, length ) {
        "opacity": true,
        "order": true,
        "orphans": true,
        "padding:0;margin-top:1px;position:absolute";
        "parent": function( elem ) {
        "PSEUDO": function( match ) {
        "PSEUDO": function( pseudo, argument ) {
        "PSEUDO": new RegExp( "^" + pseudos ),
        "root": function( elem ) {
        "selected": function( elem ) {
        "TAG": function( nodeNameSelector ) {
        "TAG": new RegExp( "^(" + identifier + "|[*])" ),
        "target": function( elem ) {
        "text script": function( text ) {
        "text": function( elem ) {
        "throws": true
        "widows": true,
        "zIndex": true,
        "zoom": true
        "~": { dir: "previousSibling" }
        ( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
        ( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
        ( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
        ( Function( "return " + str ) )() :
        (arr = slice.call( preferredDoc.childNodes )),
        )
        ) {
        ).length;
        );
        );
        );
        );
        );
        );
        );
        */
        .always( animation.opts.always );
        .done( animation.opts.done, animation.opts.complete )
        .fail( animation.opts.fail )
        .filter( function() {
        .map( function( i, elem ) {
        /*
        /* jshint eqeqeq: false */
        /* jshint eqeqeq: true */
        //
        // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        // "Whether an element is represented by a :lang() selector
        // ( namespace ) or ( selector, types [, fn] )
        // ( types, fn )
        // ( types-Object, selector, data )
        // (such as Node.js), expose a factory as module.exports.
        // ...but Flash objects (which have this classid) *can* handle expandos
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // 1. quoted (capture 3; capture 4 or capture 5)
        // 2. simple (capture 6)
        // 3. anything else (capture 2)
        // a checked appearance if the defaultChecked value isn't also set
        // A cross-domain request is in order when we have a protocol:host:port mismatch
        // Abort if there are pending holds or we're already ready
        // aborting is no longer a cancellation
        // Actual callback list
        // Actual Callbacks object
        // Add elements to results, through postFinder if defined
        // Add list-specific methods
        // add listeners to Deferred subordinates; treat others as resolved
        // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
        // Add the old object onto the stack (as a reference)
        // Add the remaining (directly-bound) handlers
        // adding 1 corrects loss of precision from parseFloat (#15100)
        // after the browser event has already occurred.
        // Alias method option to type as per ticket #12004
        // All attributes are lowercase
        // All done!
        // Allow custom headers/mimetypes and early abort
        // Allow special events to draw outside the lines
        // Although this check for six methods instead of eight
        // and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
        // and we can't measure the parent instead because it
        // and when you create one that shouldn't be
        // and/or If-None-Match header later on
        // animations on inline elements that are having width/height animated
        // Any non-fx value stops us from restoring the original display value
        // Append to fragment
        // Apply postFilter
        // Apply prefilters
        // Apply relative offset (+=/-=) if specified
        // Apply the dataFilter if provided
        // are the same in Safari causing offset.left to incorrectly be 0
        // array/object close ("]" or "}"): depth += false - true (decrement)
        // array/object open ("[" or "{"): depth += true - false (increment)
        // Assume reasonable values in the absence of getComputedStyle
        // Attach a single capturing handler on the document while someone wants focusin/focusout
        // Attach deferreds
        // attached directly to the object so GC can occur automatically
        // Avoid exposing jQuery metadata on plain JS objects when the object
        // Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
        // Avoid setting ret to empty string here
        // because it is its only offset parent
        // Because of IE, we also have to check the presence of the constructor property.
        // being equal to the identifier C,
        // Black-hole SVG <use> instance trees (#13180)
        // BlackBerry 5, iOS 3 (original iPhone)
        // Boolean properties
        // both box models exclude margin, so add it if we want it
        // Break the loop if scale is unchanged or perfect, or if we've just had enough.
        // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
        // Build a new jQuery matched element set
        // Build QSA regex
        // but a number that has a weird ending, we need to convert it to pixels
        // but not position css attributes, as those are
        // but they are ignored because response was set above.
        // by a handler lower down the tree; reflect the correct value.
        // Cache the compiled function
        // Calculate position if both inputs belong to the same document
        // Call given func if any
        // Call the postDispatch hook for the mapped type
        // Call the preDispatch hook for the mapped type, and let it bail if desired
        // Callback for when everything is done
        // Caller can pass in a jQuery.Event object, Object, or just an event type string
        // Caller can pass in an object of custom data in lieu of the handler
        // can't GC object references properly across the DOM-JS boundary
        // Capture executables
        // Catch cases where $(document).ready() is called
        // change the overflow attribute when overflowX and
        // Check against all ancestor/preceding elements
        // Check against closest ancestor/preceding element
        // Check for getComputedStyle so that this code is not run in IE<9.
        // Check for headers option
        // Check if elements with layout shrink-wrap their children
        // Check if natively block-level elements act like inline-block
        // Check if table cells still have offsetWidth/Height when they are set
        // Check if we're setting a value
        // checkbox/radio button to an empty string instead of "on"
        // Checks the timer has not already been removed
        // Clean up the event in case it is being reused
        // Clean-up function (fires after converters)
        // Clone any incoming data and prepend the event, creating the handler arg list
        // Combinators
        // Comma and first run
        // Commas must not follow "[", "{", or ","
        // computed is undefined for elems on document fragments
        // Computed unit is not pixels. Stop here and return.
        // Contents
        // Convert data if not already a string
        // Copy the events from the original to the clone
        // copy the src.innerHTML into the dest.innerHTML. #10324
        // Create a writable copy of the event object and normalize some properties
        // Cross domain only allowed if supported through XMLHttpRequest
        // Data converters
        // deep extended (see ajaxExtend)
        // Delegate to script
        // Determine event propagation path in advance, per W3C events spec (#9951)
        // Determine handlers
        // Determine if request has content
        // Determine new depth
        // determining if an element has been hidden directly using
        // did it), otherwise encode params recursively.
        // Disconnected nodes
        // display:none (it is still safe to use offsets if a parent element is
        // document.documentMode but it also doesn't support ActiveX so it won't
        // Don't attach events to noData or text/comment nodes (but allow plain objects)
        // Don't destroy the parent cache unless the internal data object
        // Don't do events on text and comment nodes
        // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
        // Don't get fooled by Object.prototype properties (jQuery #13807)
        // Don't get/set attributes on text, comment and attribute nodes
        // Don't get/set properties on text, comment and attribute nodes
        // Don't set styles on text and comment nodes
        // e.g. var jQuery = require("jquery")(window);
        // element in IE9, the outerHTML strategy above is not sufficient.
        // Element/input types
        // elements when setting their display to 'inline' and giving
        // ends up in the global cache
        // Ensure a safe fragment
        // Event data gets referenced instead of copied if the expando gets copied too
        // Events bubbling up the document may have been marked as prevented
        // Exit early if the nodes are identical
        // Extract dataTypes list
        // Fall back to computed then uncomputed css if necessary
        // Fall back to style even without computed
        // Fallback to prop when attributes are not supported
        // Fetch a seed set for right-to-left matching
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        // Filters
        // Find delegate handlers
        // Find primary matches
        // Fire callbacks
        // Fire handlers on the event path
        // First check that getClientRects works as expected
        // First Try to find as-is property data
        // Fix target property (#1925)
        // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
        // Flag for duplicate removal
        // Flag to know if list was already fired
        // Flag to prevent firing
        // Flatten any nested arrays
        // focus/blur morphs to focusin/out; ensure we're not firing them right now
        // followed by the unprefixed version
        // followed by the unprefixed version
        // For CommonJS and CommonJS-like environments where a proper `window`
        // For environments that do not have a `window` with a `document`
        // for getComputedStyle silently falls back to the reliable elem.style
        // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
        // For options that shouldn't be deep extended:
        // For use in libraries implementing .is()
        // Force callback invocation
        // force json dataType
        // Force options to be an object
        // Force termination if we see a misplaced comma
        // From the awesome hack by Dean Edwards
        // Generate a function of recursive functions that can be used to check each element
        // Get callback name, remembering preexisting value associated with it
        // Get transport
        // getElementById is not reliable as a find shortcut
        // getPropertyValue is only needed for .css('filter') in IE9, see #12537
        // Gets
        // Gets all values
        // gets hook for the prefixed version
        // gets hook for the prefixed version
        // Go through every key on the object,
        // Go through the array, only saving the items
        // Go through the array, translating each of the items to their new values
        // Grab necessary hook if one is defined
        // Guard against undefined "subtract", e.g., when used as in cssHooks
        // had been the only thing left in it
        // Handle falsy url in the settings object (#10093: consistency with old signature)
        // Handle HTML strings
        // Handle iteration over inherited properties before own properties.
        // Handle multiple events separated by a space
        // HANDLE: $(""), $(null), $(undefined), $(false)
        // HANDLE: $(DOMElement)
        // HANDLE: $(function)
        // hidden; don safety goggles and see bug #4512 for more information).
        // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
        // http://www.w3.org/TR/selectors/#lang-pseudo
        // IE returns zIndex value as an integer.
        // IE returns zIndex value as an integer.
        // IE seems to error on cross-domain PATCH requests when ActiveX XHR
        // IE throws on elements created in popups
        // IE6-7 get confused and end up setting the value of a cloned
        // IE6-8 fails to persist the checked state of a cloned checkbox
        // IE<=8 does not properly clone detached, unknown element nodes
        // If a hook was provided get the computed value from there
        // If a normal DOM Ready event fired, decrement, and wait if need be
        // If IE event model is used
        // If it fails, this function gets "jqXHR", "status", "error"
        // if last one is own, then all properties are own.
        // If no nodeType, this is expected to be an array
        // If no transport, we auto-abort
        // If nobody prevented the default action, do it now
        // If preventDefault exists, run it on the original event
        // If request was aborted inside a prefilter, stop there
        // If stopPropagation exists, run it on the original event
        // If the fx queue is dequeued, always remove the progress sentinel
        // If the nodes are siblings, we can do a quick check
        // if the public data object is empty, the private is still empty
        // If the request succeeds, this function gets "data", "status", "jqXHR"
        // If the simple way fails, read from inside an iframe
        // If the src has innerHTML and the destination does not,
        // If there are functions bound, to execute
        // If traditional, encode the "old" way (the way 1.3.2 or older
        // If url is an object, simulate pre-1.5 signature
        // If we already have the right measurement, avoid augmentation
        // If we don't have gBCR, just use 0,0 rather than error
        // If we're not dealing with a regular pixel number
        // if we're not waiting on anything, resolve the master
        // in IE throws an error.
        // in that case, element will be second argument
        // index in selector
        // Index of currently firing callback (modified by add/remove as needed)
        // init accepts an alternate rootjQuery
        // Init the element's event structure and main handler, if this is the first
        // innerText usage removed for consistency of new lines (jQuery #11153)
        // Insert callback into url or form data
        // Install callback
        // Install callbacks on deferreds
        // is auto and position is either absolute or fixed
        // is based solely on the element's language value
        // is present, execute the factory and get jQuery.
        // is serialized using JSON.stringify
        // is used. In IE 9+ always use the native XHR.
        // isHidden might be called from jQuery#filter function;
        // Iteratively approximate from a nonzero starting point
        // Keep pipe for back-compat
        // Keys separate source (or catchall "*") and destination types with a single space
        // Last fire value for non-forgettable lists
        // Leverage slice if possible
        // Locate the position of the desired element
        // Make a writable jQuery.Event from the native event object
        // Make sure it's not a disconnected DOM node
        // Make sure that DOM nodes and window objects don't pass through, as well
        // Make sure that nothing sneaks out
        // Make sure that the handler has a unique ID, used to find/remove it later
        // Make sure that we're working with the right name
        // Make sure that we're working with the right name
        // Make sure we update the tween properties later on
        // Make the changes, replacing each non-ignored context element with the new content
        // Make the deferred a promise
        // Make this explicit, since user can override this through ajaxSetup (#11264)
        // margin is only for outerHeight, outerWidth
        // might trigger a "stacking dolls" problem
        // Minified: var b,c,d
        // Miscellaneous
        // More options handling for requests with no content
        // Must be an Object.
        // NaN means non-codepoint
        // Need init if jQuery is called (just allow error to be thrown if not included)
        // need to be able to calculate position if either top or left
        // Needed because $( selector, context ) becomes $( context ).find( selector )
        // No argument, return index in parent
        // Nodes accept data unless otherwise specified; rejection can be conditional
        // nodeType defaults to 9, since context defaults to document
        // Non-existent attributes return null, we normalize to undefined
        // Normalize "", auto, and prepare for extra
        // normalize float css property
        // Note: this condition won't catch Edge as it doesn't define
        // note: when an element has margin: auto the offsetLeft and marginLeft
        // Nullify elem to prevent memory leaks in IE
        // Older IE sometimes signals "interactive" too soon
        // oldIE XHR does not support non-RFC2616 methods (#13240)
        // Once for each type.namespace in types; type may be omitted
        // Only deal with non-null/undefined values
        // Only defining an ID for JS objects if its cache already exists allows
        // Only DOM nodes need a new unique ID for each element since their data
        // Only DOM nodes need the global jQuery cache; JS object data is
        // Operator (capture 2)
        // or beginning with the identifier C immediately followed by "-".
        // Or just use first one
        // or radio button. Worse, IE6-7 fail to give the cloned element
        // other cases ("," or primitive): depth += true - true (numeric cast)
        // Otherwise append directly
        // Otherwise initialize for horizontal or vertical properties
        // Otherwise set the returnValue property of the original event to false
        // Otherwise we need full lists of their ancestors for comparison
        // Otherwise, if a way to get the computed value exists, use that
        // overflowY are set to the same value
        // Own properties are enumerated firstly, so to speed up,
        // Parentless nodes are either documents or disconnected
        // parseFloat NaNs numeric-cast false positives (null|true|false|"")
        // Perform no more replacements after returning to outermost depth
        // Position-in-collection
        // Potentially complex pseudos
        // Preserve script evaluation history
        // Preserve script evaluation history
        // proportional to the parent element instead
        // Queue of execution data for repeatable lists
        // Quick check to determine if target is callable, in the spec
        // reach this code.
        // Record all 3 overflow attributes because IE does not
        // Reduce context if the leading compound selector is an ID
        // Regex strategy adopted from Diego Perini
        // release memory in IE
        // Remember that the DOM is ready
        // Remove from its parent by default
        // Remove hash character (#7531: and string promotion)
        // Remove the expando if it's no longer used
        // Remove this token
        // Require either new content or an interest in ignored elements to invoke the callback
        // Return for frameset docs that don't have a body
        // Return the cloned set
        // Return the newly-formed element set
        // Return, converting to number if forced or a qualifier was provided and val looks numeric
        // Run delegates first; they may want to stop propagation beneath us
        // Running getBoundingClientRect on a disconnected node
        // Save selector and tokenization
        // Save the URL in case we're toying with the If-Modified-Since
        // See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
        // See jQuery.data for more information
        // See ticket #14549 for more info.
        // Serialize array item.
        // Serialize object item.
        // Serialize scalar item.
        // Serialize the form elements
        // Set display property to inline-block for height/width
        // set position first, in-case top/left are set even on static elem
        // Set the Accepts header for the server, depending on the dataType
        // Set the cancelBubble property of the original event to true
        // Set the correct header, if data is being sent
        // Set the guid of unique handler to the same of original handler, so it can be removed
        // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
        // Sets multiple values
        // Setup
        // Setup
        // shift arguments if data argument was omitted
        // Shortcut for document ready
        // show any hidden elements after setting opacity to 0
        // Simulated bind
        // since IE also does not support "trace" and "connect"
        // Skip elements already in the context collection (trac-4087)
        // skip the boolean and the target
        // so implement the relevant behavior ourselves
        // so migrate can support jQuery.sub (gh-2101)
        // so we don't default to auto
        // Sort on method existence if only one input has compareDocumentPosition
        // Special expections of .data basically thwart jQuery.access,
        // Standards-based browsers support DOMContentLoaded
        // Starting value computation is required for potential unit mismatches
        // store state if its toggle - enables .stop().toggle() to "reverse"
        // Store the correct default display
        // Subtract parent offsets and element margins
        // subtraction forces infinities to NaN
        // Support (at least): Chrome, IE9
        // Support: Android 2.3
        // Support: Firefox
        // Support: Firefox<24
        // Support: Firefox<=42+
        // Support: IE
        // Support: IE
        // Support: IE
        // Support: IE
        // Support: IE 11
        // Support: IE 9 - 10 only
        // Support: IE 9-11
        // Support: IE11 only
        // Support: IE6
        // Support: IE6-10
        // Support: IE6-8
        // Support: IE6/7
        // Support: IE<8
        // Support: IE<9
        // Support: IE<9
        // Support: IE<9
        // Support: IE<9
        // Support: IE<9
        // Support: IE<9
        // Support: IE<9
        // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
        // Support: Opera 12.1x only
        // Support: Safari 6-8+
        // table row; if so, offsetWidth/Height are not reliable for use when
        // Target should not be a text node (#504, #13143)
        // Teardown
        // Test default display if display is currently "none"
        // Test for null|undefined property data
        // that pass the validator function
        // the code to shortcut on the same path as a DOM node with no cache
        // The foundational matcher ensures that elements are reachable from top-level context(s)
        // The identifier C does not have to be a valid language name."
        // The jQuery object is actually just the init constructor 'enhanced'
        // The matching of C against the element's language value is performed case-insensitively.
        // The url can be an options object (which then must have .url)
        // them layout
        // This "if" is needed for plain objects
        // This accentuates the need for the creation of a real `window`.
        // This path appears unavoidable for IE9. When cloning an object
        // this throws a TypeError, but we will just return undefined.
        // to display:none and there are still other visible table cells in a
        // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
        // Trigger any bound ready events
        // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
        // Trust units reported by jQuery.css
        // Try convertible dataTypes
        // Update scale, tolerating zero or NaN from tween.cur()
        // Uppercase the type
        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
        // Use data converter to retrieve json after script execution
        // Use same guid so caller can remove using origFn
        // Use textContent for elements
        // Use the fix-ed jQuery.Event rather than the (read-only) native event
        // Walk down the tree looking for a discrepancy
        // Watch for a new set of requests
        // We also use the url parameter if available
        // We assume that it's the callback
        // We can fire global events as of now if asked to
        // We have to handle DOM nodes and JS objects differently because IE6-7
        // We have to pre-define these values for FF (#10227)
        // we need the check for style in case a browser which returns unreliable values
        // We use this for POS matching in `select`
        // Will be changed later if needed.
        // Work with a copy of dataTypes in case we need to modify it for conversion
        // Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
        // Workaround erroneous numeric interpretation of +"0x"
        // Workaround failure to string-cast null input
        // XHR cannot access local files, always use ActiveX for that case
        // you can add your own custom options here if
        //convert "normal" to computed value
        4 :
        accepts: {
        add = function( key, value ) {
        add( prefix, obj );
        adjusted = valueParts[ 1 ] ?
        anim = this,
        anim.always( function() {
        anim.done( function() {
        animation = deferred.promise( {
        animation.opts.start.call( elem, animation );
        args = slice.call( arguments, 2 );
        args[ 0 ] = event;
        argument = +argument;
        assert(function( div ) {
        assert(function( div ) {
        assert(function( div ) {
        async: false,
        async: true,
        attrHandle[ name ] = function( elem, name, isXML ) {
        attrHandle[ name ] = function( elem, name, isXML ) {
        attrs = { height: type },
        attrs.opacity = attrs.width = type;
        attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
        augmentWidthOrHeight(
        beforeunload: {
        bindType: fix,
        blur: {
        body = document.getElementsByTagName( "body" )[ 0 ];
        body.appendChild( container ).appendChild( div );
        body.removeChild( container );
        BODY: "block"
        boxSizingReliable: function() {
        bulk = key == null;
        bulk ?
        byElement = elementMatchers.length > 0,
        cache = isNode ? jQuery.cache : elem,
        cache = isNode ? jQuery.cache : elem,
        cache: null,
        cache: true,
        cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
        cache[ id ] = undefined;
        cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
        cached = compilerCache[ selector + " " ];
        cached = tokenCache[ selector + " " ];
        cached.selector = selector;
        cacheURL = s.url;
        calculatePosition = ( position === "absolute" || position === "fixed" ) &&
        callback = params;
        callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
        chainable = true;
        chainable = true;
        checkDisplay = display === "none" ?
        checkNonElements = base && dir === "parentNode",
        children: true,
        className = " " + selector + " ";
        click: {
        collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
        compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
        compiled = typeof selector === "function" && selector,
        complete: fn || !fn && easing ||
        computed = computed || getStyles( elem );
        computed = computed || getStyles( elem );
        container = document.createElement( "div" ),
        container = document.createElement( "div" );
        container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
        contains = jQuery.contains( elem.ownerDocument, elem );
        contents = s.contents,
        contents: true,
        contents: {
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        context = context || document;
        context = false;
        context,
        converters = {},
        converters: {
        copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
        createOptions( options ) :
        cur = a;
        cur = b;
        cur = cur[ dir ];
        cur = tmp = elem = elem || document;
        curCSSLeft = jQuery.css( elem, "left" );
        curCSSTop = jQuery.css( elem, "top" );
        curData = jQuery._data( dest, oldData ),
        curData.data = jQuery.extend( {}, curData.data );
        curData.events = {};
        curOffset = curElem.offset();
        current = dataTypes.shift();
        currentValue = tween ?
        data = data == null ?
        data = elem.getAttribute( name );
        data = jQuery._data( dest );
        data = selector = undefined;
        data === undefined && typeof name === "string" ) {
        data: null,
        dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
        dataShow = jQuery._data( elem, "fxshow" );
        dataType: "script",
        dataType: null,
        dataTypes = s.dataTypes.slice();
        dataTypes = s.dataTypes;
        dataTypes.shift();
        deep = false;
        deep = target;
        deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
        deferred = jQuery.Deferred().always( function() {
        deferred.promise( jqXHR ).complete = completeDeferred.add;
        delegateType: fix,
        delete cache[ id ].data;
        delete cache[ id ];
        delete curData.handle;
        delete div.test;
        delete Expr.find["ID"];
        depth += !close - !open;
        depth = null,
        dest.defaultChecked = dest.checked = src.checked;
        dest.defaultSelected = dest.selected = src.defaultSelected;
        dest.defaultValue = src.defaultValue;
        dest.removeAttribute( jQuery.expando );
        destElements = getAll( clone, "script" );
        destElements = srcElements = node = null;
        detach();
        diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
        disableScript( dest ).text = src.text;
        display = actualDisplay( nodeName, doc );
        display = elem.style.display;
        display = elemdisplay[ nodeName ];
        display = jQuery.css( elem, "display" );
        display = jQuery.css( elem[ 0 ], "display" );
        div = document.createElement( "div" ),
        div = document.createElement( "div" );
        div = document.createElement( "div" );
        div = document.createElement( "div" );
        div = null;
        div.appendChild( document.createComment("") );
        div.className = "i";
        div.style.cssText =
        div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
        div.style.display = "none";
        div.style.WebkitBoxSizing === "";
        do {
        doc = node ? node.ownerDocument || node : preferredDoc;
        docElem = doc.documentElement;
        docElem.appendChild( div ).id = expando;
        docElem.mozMatchesSelector ||
        docElem.msMatchesSelector) )) ) {
        docElem.oMatchesSelector ||
        docElem.webkitMatchesSelector ||
        document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";
        document.detachEvent( "onreadystatechange", completed );
        document.readyState === "complete" ) {
        document.removeEventListener( "DOMContentLoaded", completed );
        documentElement.appendChild( container );
        documentElement.removeChild( container );
        doneName = done++;
        duplicates = [],
        duration: speed,
        e.cancelBubble = true;
        easing = specialEasing[ name ];
        easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
        elem :
        elem = el || elem;
        elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
        elem = elem.parentNode;
        elem = elements[ index ];
        elem = elements[ index ];
        elem = elems[ i ];
        elem = null;
        elem.defaultChecked = elem.checked;
        elem.getElementsByTagName( "tbody" )[ 0 ] ||
        elem.nodeType === 9 ?
        elem.removeAttribute( "type" );
        elem.style[ name ] = old[ name ];
        elem.style[ name ] = options[ name ];
        elem.type = match[ 1 ];
        elem;
        elemdisplay[ nodeName ] = display;
        elementMatchers = [],
        elems :
        elems = selector ? jQuery.filter( selector, elem ) : elem,
        event = event[ jQuery.expando ] ?
        event = jQuery.event.fix( event );
        event = new jQuery.Event( originalEvent );
        event.delegateTarget = this;
        event.isTrigger = onlyHandlers ? 2 : 3;
        event.metaKey = !!event.metaKey;
        event.namespace = namespaces.join( "." );
        event.result = undefined;
        event.rnamespace = event.namespace ?
        event.type = type;
        eventName = "on" + i;
        events = oldData.events;
        expand: function( value ) {
        expr = ":not(" + expr + ")";
        Expr.attrHandle[ arr[i] ] = handler;
        Expr.filter["ID"] =  function( id ) {
        Expr.filter["ID"] = function( id ) {
        Expr.find["ID"] = function( id, context ) {
        factory( global );
        false :
        filter: function( event, original ) {
        filter: function( event, original ) {
        finalDataType = dataTypes[ 0 ];
        finalDataType = finalDataType || firstDataType;
        fire = function() {
        fired,
        fireGlobals = jQuery.event && s.global;
        firing,
        firingIndex = -1,
        first = fragment.firstChild;
        first.length = i;
        flatOptions = jQuery.ajaxSettings.flatOptions || {};
        flatOptions: {
        fn = function( event ) {
        fn = returnFalse;
        fn = selector;
        fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
        focus: {
        fontWeight: "400"
        for ( ; ( elem = elems[ i ] ) != null; i++ ) {
        for ( ; ( elem = this[ i ] ) != null; i++ ) {
        for ( ; i < l; i++ ) {
        for ( ; i < len; i++ ) {
        for ( ; i < length; i++ ) {
        for ( ; i <= last; i++ ) {
        for ( ; index < length ; index++ ) {
        for ( conv in s.converters ) {
        for ( e in data.events ) {
        for ( found = [], elems = context.childNodes || context;
        for ( i = 0; i < len; i++ ) {
        for ( i in key ) {
        for ( i in s.headers ) {
        for ( i in { success: 1, error: 1, complete: 1 } ) {
        for ( key in obj ) {}
        for ( name in obj ) {
        for ( name in obj ) {
        for ( prefix in a ) {
        for ( prop in orig ) {
        for ( type in contents ) {
        for ( type in events ) {
        for ( type in Expr.filter ) {
        for ( type in responses ) {
        for ( type in types ) {
        for ( var key in xhrCallbacks ) {
        found = typeof context.getElementsByTagName !== "undefined" ?
        found;
        fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
        fragment = document.createDocumentFragment(),
        function done( status, nativeStatusText, responses, headers ) {
        function( a, b ) {
        function( a, b ) {
        function( elem, computed ) {
        function( elem, context, xml ) {
        function( elem, context, xml ) {
        function( elem, context, xml ) {
        function( elem, name, isXML ) {
        function( tag, context ) {
        function( tag, context ) {
        function( target, els ) {
        function( target, els ) {
        fxNow = undefined;
        get: function( elem ) {
        get: function( elem ) {
        get: function( elem, computed ) {
        get: function( elem, computed, extra ) {
        get: function( elem, name ) {
        get: function( tween ) {
        get: function() {
        global: false,
        global: true,
        handle: function( event ) {
        handle: function( event ) {
        handlerQueue = jQuery.event.handlers.call( this, event, handlers );
        headers: {},
        hidden = elem.nodeType && isHidden( elem ),
        hooks = jQuery._queueHooks( elem, "fx" );
        hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
        hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
        hooks = jQuery.cssHooks[ name ];
        hooks.stop = function() {
        hooks.unqueued++;
        HTML: "block",
        i = 0,
        i = 0,
        i = 0,
        i = 0,
        i = 0;
        i = 0;
        i = 0;
        i = 0;
        i = 0;
        i = 0;
        i = 0;
        i = 0;
        i = 1,
        i = arr.length;
        i = copy.length;
        i = cssPrefixes.length;
        i = leadingRelative ? 1 : 0,
        i = match.length;
        i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
        i++;
        i--;
        id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;
        id = isNode ? elem[ jQuery.expando ] : jQuery.expando;
        if ( !( eventHandle = elemData.handle ) ) {
        if ( !( events = elemData.events ) ) {
        if ( !( support[ i ] = eventName in window ) ) {
        if ( !arguments.length ) {
        if ( !arguments.length ) {
        if ( !aup || !bup ) {
        if ( !body || !body.style ) {
        if ( !doc ) {
        if ( !e ) {
        if ( !e || this.isSimulated ) {
        if ( !elem ) {
        if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
        if ( !elem.style ) {
        if ( !elem.style ) {
        if ( !elemData ) {
        if ( !elemData || !( events = elemData.events ) ) {
        if ( !event.target ) {
        if ( !event.target ) {
        if ( !fixHook ) {
        if ( !handler.guid ) {
        if ( !isEmptyDataObject( cache[ id ] ) ) {
        if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
        if ( !isXML ) {
        if ( !isXML ) {
        if ( !jQuery.contains( docElem, elem ) ) {
        if ( !jQuery.isFunction( fn ) ) {
        if ( !jQuery.isFunction( value ) ) {
        if ( !keepData && node.nodeType === 1 ) {
        if ( !match ) {
        if ( !matched ) {
        if ( !matched || (match = rcomma.exec( soFar )) ) {
        if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
        if ( !onlyHandlers && !event.isDefaultPrevented() ) {
        if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
        if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
        if ( !options.crossDomain || support.cors ) {
        if ( !prev && isSuccess && s.dataFilter ) {
        if ( !remaining ) {
        if ( !s.hasContent ) {
        if ( !selector ) {
        if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
        if ( !startLength && hooks ) {
        if ( !support.ownFirst ) {
        if ( !support.shrinkWrapBlocks() ) {
        if ( !this[ 0 ] ) {
        if ( !thisCache.data ) {
        if ( !timer() && timers[ i ] === timer ) {
        if ( !transport ) {
        if ( !view || !view.opener ) {
        if ( "using" in options ) {
        if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
        if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
        if ( ( options = arguments[ i ] ) != null ) {
        if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
        if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
        if ( (elem = unmatched[i]) ) {
        if ( (match = rcombinators.exec( soFar )) ) {
        if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
        if ( a === b ) {
        if ( a === b ) {
        if ( a === b ) {
        if ( arguments.length ) {
        if ( arguments.length < setter ) {
        if ( arr != null ) {
        if ( arr ) {
        if ( attrNames && elem.nodeType === 1 ) {
        if ( bulk ) {
        if ( calculatePosition ) {
        if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
        if ( clearQueue && type !== false ) {
        if ( compare & 1 ||
        if ( compare ) {
        if ( computed ) {
        if ( computed ) {
        if ( computed ) {
        if ( contains ) {
        if ( ct === undefined ) {
        if ( current ) {
        if ( data && jQuery.trim( data ) ) {
        if ( dataAndEvents ) {
        if ( dataShow ) {
        if ( delegateCount && cur.nodeType &&
        if ( delegateCount < handlers.length ) {
        if ( depth === 0 ) {
        if ( dest.parentNode ) {
        if ( dest.value !== src.value ) {
        if ( destElements.length > 0 ) {
        if ( display === "none" || !display ) {
        if ( div.parentNode ) {
        if ( document.documentMode > 8 ) {
        if ( document.readyState === "complete" ||
        if ( documentIsHTML ) {
        if ( e && e.stopImmediatePropagation ) {
        if ( e.isDefaultPrevented() ) {
        if ( e.preventDefault ) {
        if ( e.stopPropagation ) {
        if ( elem ) {
        if ( elem ) {
        if ( elem || elem === 0 ) {
        if ( elem.detachEvent ) {
        if ( elem.getClientRects().length ) {
        if ( elem.nodeType === 1 ) {
        if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
        if ( elem.removeEventListener ) {
        if ( event.target.nodeType === 3 ) {
        if ( event[ jQuery.expando ] ) {
        if ( extra === "" || extra ) {
        if ( extra === "margin" ) {
        if ( finalDataType !== dataTypes[ 0 ] ) {
        if ( fireGlobals && jQuery.active++ === 0 ) {
        if ( first || ignored ) {
        if ( fn ) {
        if ( fn ) {
        if ( fn === "inprogress" ) {
        if ( fn === false ) {
        if ( fragment.childNodes.length === 1 ) {
        if ( func ) {
        if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
        if ( handler.handler ) {
        if ( hidden ) {
        if ( hold ) {
        if ( hooks && "expand" in hooks ) {
        if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
        if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
        if ( hooks && "get" in hooks ) {
        if ( hooks && hooks.set ) {
        if ( hooks.unqueued == null ) {
        if ( index !== name ) {
        if ( isArrayLike( elems ) ) {
        if ( isArrayLike( obj ) ) {
        if ( isBorderBox ) {
        if ( isNode ) {
        if ( jQuery.css( elem, "position" ) === "fixed" ) {
        if ( jQuery.fn.triggerHandler ) {
        if ( jQuery.isArray( value ) ) {
        if ( jQuery.isEmptyObject( events ) ) {
        if ( jQuery.isFunction( data ) ) {
        if ( jQuery.isFunction( func ) ) {
        if ( jQuery.isFunction( html ) ) {
        if ( jQuery.isFunction( html ) ) {
        if ( jQuery.isFunction( opt.old ) ) {
        if ( jQuery.isFunction( options ) ) {
        if ( jQuery.isFunction( props ) ) {
        if ( jQuery.isFunction( value ) ) {
        if ( jQuery.isFunction( value ) ) {
        if ( jQuery.isFunction( value ) ) {
        if ( jsonProp ) {
        if ( key === undefined ) {
        if ( keys.push( key + " " ) > Expr.cacheLength ) {
        if ( len !== len ) {
        if ( length > 1 ) {
        if ( matcher ) {
        if ( n.nodeType === 1 && n !== elem ) {
        if ( name !== "toJSON" ) {
        if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
        if ( name in emptyStyle ) {
        if ( name.slice( -5 ) !== "Until" ) {
        if ( node.parentNode ) {
        if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
        if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
        if ( nType === 3 || nType === 8 || nType === 2 ) {
        if ( nType === 3 || nType === 8 || nType === 2 ) {
        if ( obj == null ) {
        if ( opt.queue ) {
        if ( options.left != null ) {
        if ( options.top != null ) {
        if ( parent.addEventListener ) {
        if ( position === "static" ) {
        if ( postFilter ) {
        if ( prepend ) {
        if ( pvt ) {
        if ( reliableHiddenOffsetsVal ) {
        if ( requireNonComma && comma ) {
        if ( result ) {
        if ( ret == null && style && style[ name ] ) {
        if ( ret == null ) {
        if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
        if ( rfxtypes.exec( value ) ) {
        if ( risSimple.test( qualifier ) ) {
        if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {
        if ( rnumnonpx.test( val ) ) {
        if ( s.beforeSend &&
        if ( s.crossDomain == null ) {
        if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
        if ( s.data && s.processData && typeof s.data !== "string" ) {
        if ( s.ifModified ) {
        if ( s.responseFields[ current ] ) {
        if ( scripts ) {
        if ( seed ) {
        if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
        if ( selector && typeof selector === "string" ) {
        if ( selector === false || typeof selector === "function" ) {
        if ( selector.selector !== undefined ) {
        if ( show ) {
        if ( shrinkWrapBlocksVal != null ) {
        if ( special.postDispatch ) {
        if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
        if ( src[ key ] !== undefined ) {
        if ( state === 2 ) {
        if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
        if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
        if ( this.isLocal ) {
        if ( this.length > 1 ) {
        if ( this.options.duration ) {
        if ( this.options.step ) {
        if ( this[ 0 ] ) {
        if ( thisCache ) {
        if ( toggle ) {
        if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
        if ( tween ) {
        if ( tween.elem.nodeType && tween.elem.parentNode ) {
        if ( type !== false ) {
        if ( type.indexOf( "." ) > -1 ) {
        if ( typeof context === "string" ) {
        if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
        if ( typeof data === "string" ) {
        if ( typeof dataTypeExpression !== "string" ) {
        if ( typeof div.style.zoom !== "undefined" ) {
        if ( typeof elem === "string" ) {
        if ( typeof elem.getAttribute === "undefined" ) {
        if ( typeof elem.getBoundingClientRect !== "undefined" ) {
        if ( typeof elem.textContent === "string" ) {
        if ( typeof key === "object" ) {
        if ( typeof selector !== "string" ) {
        if ( typeof selector !== "string" ) {
        if ( typeof selector === "string" ) {
        if ( typeof selector === "string" ) {
        if ( typeof state === "boolean" ) {
        if ( typeof stateVal === "boolean" && type === "string" ) {
        if ( typeof type !== "string" ) {
        if ( typeof type !== "string" ) {
        if ( typeof type !== "string" ) {
        if ( typeof types === "object" ) {
        if ( typeof url === "object" ) {
        if ( typeof value === "string" && value ) {
        if ( typeof value === "string" && value ) {
        if ( types && types.preventDefault && types.handleObj ) {
        if ( val ) {
        if ( val < 0 || val == null ) {
        if ( val === "normal" && name in cssNormalTransform ) {
        if ( val === undefined ) {
        if ( value !== undefined ) {
        if ( value !== undefined ) {
        if ( value !== undefined ) {
        if ( value === false ) {
        if ( wait !== true && --jQuery.readyWait > 0 ) {
        if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
        if ( window.DOMParser ) { // Standard
        if ( window.getComputedStyle ) {
        implicitRelative = leadingRelative || Expr.relative[" "],
        index = 0,
        index = 0,
        index = 0,
        initial = currentValue(),
        initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
        initialInUnit = +initial || 1;
        initialInUnit = +initialInUnit || +initial || 0;
        iNoClone = l - 1,
        input = document.createElement( "input" ),
        input = document.createElement( "input" );
        inspected[ dataType ] = true;
        inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
        internalKey = jQuery.expando,
        isBorderBox = support.boxSizing &&
        isFunction = jQuery.isFunction( value );
        isFunction = jQuery.isFunction( value );
        isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
        isNode = elem.nodeType,
        isNode = elem.nodeType,
        j = 0,
        jQuery( scripts ).remove();
        jQuery._data(
        jQuery.ajax( {
        jQuery.attrHooks[ name ] = {
        jQuery.cleanData( [ elem ], true );
        jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
        jQuery.each( a, function() {
        jQuery.each( obj, function( i, v ) {
        jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
        jQuery.each( tuples, function( i, tuple ) {
        jQuery.error( "Invalid JSON: " + data );
        jQuery.error( "Invalid XML: " + data );
        jQuery.event.add( this, types, fn, data, selector );
        jQuery.event.special[ fix ] = {
        jQuery.event.trigger( e, null, elem );
        jQuery.extend( this, props );
        jQuery.extend( tick, {
        jQuery.extend( true, target, deep );
        jQuery.extend( {}, options );
        jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
        jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
        jQuery.fn[ funcName ] = function( margin, value ) {
        jQuery.fx.start();
        jQuery.fx.stop();
        jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
        jQuery.isReady = true;
        jQuery.merge( [ context ], found ) :
        jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?
        jQuery.propHooks[ name ] = {
        jQuery.ready();
        jQuery.timers.pop();
        jQuery.valHooks[ this ].get = function( elem ) {
        jqXHR.always( function() {
        jqXHR.error = jqXHR.fail;
        jqXHR.setRequestHeader(
        jqXHR.success = jqXHR.done;
        jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
        keepScripts = context;
        l = collection.length,
        l = elems.length,
        leadingRelative = Expr.relative[ tokens[0].type ],
        len = contexts.length;
        len = tokens.length,
        len = tokens.length,
        len = unmatched.length,
        length = Animation.prefilters.length,
        length = arguments.length,
        length = collection.length;
        length = elements.length;
        length = elems.length,
        letterSpacing: "0",
        list = [],
        load: {
        locked,
        mapped = map != null;
        markFunction( superMatcher ) :
        match = !seed && tokenize( (selector = compiled.selector || selector) );
        matchAnyContext = addCombinator( function( elem ) {
        matchContext = addCombinator( function( elem ) {
        matched = false;
        matchers = [ function( elem, context, xml ) {
        matchers[0];
        Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
        maxIterations = 20,
        memory,
        module.exports = global.document ?
        name = cssPrefixes[ i ] + capName;
        name = jQuery.camelCase( index );
        name = jQuery.cssProps[ origName ] ||
        name = jQuery.cssProps[ origName ] ||
        name = jQuery.propFix[ name ] || name;
        name === "width" ? 1 : 0,
        newContext = context && context.ownerDocument,
        newUnmatched = [],
        next: true,
        nodes = [],
        nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
        nodeType = +elem.nodeType || 1;
        nodeType = context ? context.nodeType : 9;
        nodeType = elem.nodeType;
        object[ flag ] = true;
        off = url.indexOf( " " );
        old = {};
        old[ name ] = elem.style[ name ];
        oldData = jQuery._data( src ),
        ontype = type.indexOf( ":" ) < 0 && "on" + type;
        opacity: {
        opt = select.appendChild( document.createElement( "option" ) );
        opt.duration in jQuery.fx.speeds ?
        opt.queue = "fx";
        option: {
        options = options || {};
        opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
        orig = {},
        origFn = fn;
        overwritten = window[ callbackName ];
        params = undefined;
        password: null,
        pixelMarginRight: function() {
        pixelMarginRightVal = reliableMarginRightVal = true;
        pixelPosition: function() {
        pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
        postDispatch: function( event ) {
        postFilter = setMatcher( postFilter );
        postFinder = setMatcher( postFinder, postSelector );
        preferredDoc.childNodes
        prev = current;
        prev: true
        processData: true,
        promise.pipe = promise.then;
        promise.promise( deferred );
        props = animation.props;
        props: "char charCode key keyCode".split( " " ),
        props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
        proxy = function() {
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        qualifier = jQuery.filter( qualifier, elements );
        queue = [],
        ralpha = /alpha\([^)]*\)/i,
        readyList = jQuery.Deferred();
        readyList.resolveWith( document, [ jQuery ] );
        reliableHiddenOffsets: function() {
        reliableHiddenOffsetsVal = div.getClientRects().length === 0;
        reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
        reliableMarginLeft: function() {
        reliableMarginRight: function() {
        requireNonComma = open || comma;
        resolve();
        responseFields: {
        restoreScript( dest );
        result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
        results,
        ret = "",
        ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;
        ret = computed ? computed[ name ] : undefined;
        ret = jQuery.find.attr( elem, name );
        ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
        ret = thisCache;
        ret = thisCache[ name ];
        ret.context = this.context;
        ret.prevObject = this;
        ret.selector = this.selector ? this.selector + " " + selector : selector;
        return !!elem && !isEmptyDataObject( elem );
        return !!fn( div );
        return !!winnow(
        return !div.getAttribute("className");
        return !div.getElementsByTagName("*").length;
        return !document.getElementsByName || !document.getElementsByName( expando ).length;
        return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
        return "";
        return "script";
        return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
        return (cache[ key + " " ] = value);
        return (name === "input" || name === "button") && elem.type === type;
        return +( new Date() );
        return -1;
        return -1;
        return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
        return 0.5 - Math.cos( p * Math.PI ) / 2;
        return 0;
        return [ context.createElement( parsed[ 1 ] ) ];
        return _load.apply( this, arguments );
        return access( this, function( elem, method, val ) {
        return access( this, function( elem, name, value ) {
        return access( this, function( value ) {
        return access( this, function( value ) {
        return access( this, jQuery.attr, name, value, arguments.length > 1 );
        return access( this, jQuery.prop, name, value, arguments.length > 1 );
        return arguments.length === 1 ?
        return arguments.length > 0 ?
        return arguments.length > 1 ?
        return callback;
        return clone;
        return collection.each( function( index ) {
        return compare & 4 ? -1 : 1;
        return concat.apply( [], ret );
        return data === undefined ?
        return defer.promise( obj );
        return deferred.promise();
        return deferred;
        return diff;
        return dir( elem, "nextSibling" );
        return dir( elem, "nextSibling", until );
        return dir( elem, "parentNode" );
        return dir( elem, "parentNode", until );
        return dir( elem, "previousSibling" );
        return dir( elem, "previousSibling", until );
        return document.activeElement;
        return document;
        return domManip( this, arguments, function( elem ) {
        return domManip( this, arguments, function( elem ) {
        return domManip( this, arguments, function( elem ) {
        return domManip( this, arguments, function( elem ) {
        return domManip( this, arguments, function( elem ) {
        return elem === fn.elem;
        return elem.currentStyle;
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        return elem.nodeValue;
        return elem;
        return elem;
        return elem[ name ];
        return empty || optall.queue === false ?
        return event.result;
        return event.result;
        return false;
        return false;
        return false;
        return first;
        return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
        return handlerQueue;
        return high !== high || escapedWhitespace ?
        return hooks && hooks.get ?
        return html.replace( rxhtmlTag, "<$1></$2>" );
        return i ?
        return internalData( elem, name, data );
        return internalData( elem, name, data, true );
        return internalRemoveData( elem, name );
        return internalRemoveData( elem, name, true );
        return jQuery._data( elem, key ) || jQuery._data( elem, key, {
        return jQuery.ajax( jQuery.extend( {
        return jQuery.css( elem, "display" ) === "none" ||
        return jQuery.each( this, callback );
        return jQuery.get( url, data, callback, "json" );
        return jQuery.get( url, undefined, callback, "script" );
        return jQuery.grep( elements, function( elem ) {
        return jQuery.grep( elements, function( elem, i ) {
        return jQuery.inArray(
        return jQuery.makeArray( selector, this );
        return jQuery.nodeName( elem, "iframe" ) ?
        return jQuery.param( this.serializeArray() );
        return jQuery.type( obj ) === "array";
        return jQuery.type( obj ) === "function";
        return jQuery;
        return jqXHR;
        return key === undefined || hasOwn.call( obj, key );
        return letter.toUpperCase();
        return markFunction(function( seed, matches ) {
        return matches;
        return name === "input" && elem.type === type;
        return name;
        return name;
        return new jQuery.Event( src, props );
        return new jQuery.fn.init( selector, context );
        return new window.ActiveXObject( "Microsoft.XMLHTTP" );
        return new window.XMLHttpRequest();
        return null;
        return null;
        return num != null ?
        return obj != null && obj == obj.window;
        return obj;
        return on( this, types, selector, data, fn );
        return on( this, types, selector, data, fn, 1 );
        return p;
        return parent && parent.nodeType !== 11 ? parent : null;
        return parseOnly ? 0 : cached.slice( 0 );
        return proxy;
        return remove( this, selector );
        return remove( this, selector, true );
        return responses[ finalDataType ];
        return results;
        return ret == null ? undefined : ret;
        return ret === undefined ?
        return ret === undefined ?
        return ret;
        return ret;
        return ret;
        return selected;
        return settings ?
        return showHide( this );
        return showHide( this, true );
        return shrinkWrapBlocksVal;
        return sibling( elem, "nextSibling" );
        return sibling( elem, "previousSibling" );
        return siblings( ( elem.parentNode || {} ).firstChild, elem );
        return siblings( elem.firstChild );
        return slice.call( this );
        return speed == null || typeof speed === "boolean" ?
        return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
        return text == null ?
        return this.add( selector == null ?
        return this.animate( props, speed, easing, callback );
        return this.each( function( i ) {
        return this.each( function( i ) {
        return this.each( function() {
        return this.each( function() {
        return this.each( function() {
        return this.each( function() {
        return this.each( function() {
        return this.each( function() {
        return this.each( function() {
        return this.each( function() {
        return this.each( function() {
        return this.each( function() {
        return this.each( function() {
        return this.eq( -1 );
        return this.eq( 0 );
        return this.filter( function() {
        return this.filter( isHidden ).css( "opacity", 0 ).show()
        return this.map( function() {
        return this.map( function() {
        return this.map( function() {
        return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
        return this.off( types, null, fn );
        return this.on( type, fn );
        return this.on( types, null, data, fn );
        return this.on( types, selector, data, fn );
        return this.parent().each( function() {
        return this.prevObject || this.constructor();
        return this.pushStack(
        return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
        return this.pushStack( jQuery.map( this, function( elem, i ) {
        return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
        return this.pushStack( ret );
        return this.pushStack( ret );
        return this.pushStack( slice.apply( this, arguments ) );
        return this.pushStack( winnow( this, selector || [], false ) );
        return this.pushStack( winnow( this, selector || [], true ) );
        return this.queue( type || "fx", [] );
        return this;
        return this;
        return this;
        return this;
        return this;
        return true;
        return typeof obj === "object" || typeof obj === "function" ?
        return val;
        return view.getComputedStyle( elem );
        return window.JSON.parse( data + "" );
        return {
        return {
        return {
        return;
        return;
        return;
        return;
        return;
        return;
        return;
        return;
        root = root || rootjQuery;
        s = [],
        s.cache = false;
        s.contents.script = false;
        s.converters[ "script json" ] = function() {
        s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
        s.dataTypes[ 0 ] = "json";
        s.global = false;
        s.hasContent = !rnoContent.test( s.type );
        s.type = "GET";
        s.type = options.method || options.type || s.method || s.type;
        s.type = s.type.toUpperCase();
        s.url = ( ( url || s.url || ajaxLocation ) + "" )
        safe = createSafeFragment( context ),
        safe.removeChild( tmp );
        safeFrag = document.createDocumentFragment();
        scale = 1,
        script: "text/javascript, application/javascript, " +
        script: /\b(?:java|ecma)script\b/
        scripts = !keepScripts && [];
        scripts, doc, fragment,
        seed,
        seekingTransport = ( structure === transports );
        select = document.createElement( "select" ),
        select: {
        selector += tokens[i].value;
        selector = "";
        selector = jQuery.trim( url.slice( off, url.length ) );
        self = this,
        self = {
        set: function( elem ) {
        set: function( elem, value ) {
        set: function( elem, value ) {
        set: function( elem, value ) {
        set: function( elem, value, extra ) {
        set: function( elem, value, name ) {
        set: function( elem, value, name ) {
        set: function( elem, value, name ) {
        set: function( tween ) {
        set: nodeHook.set
        setDocument( context );
        setDocument( elem );
        setDocument( elem );
        setDocument();
        setMatchers = [],
        setup: function() {
        setup: function() {
        shrinkWrapBlocksVal = false;
        Sizzle( selector, contexts[i], results );
        soFar ?
        soFar, groups, preFilters,
        soFar.length :
        special = jQuery.event.special[ type ] || {};
        stopped,
        str = jQuery.trim( data + "" );
        strAbort = "abort";
        style = elem.style,
        style.display = display;
        style.overflow = "hidden";
        styles = getStyles( elem ),
        superMatcher = function( seed, context, xml, results, outermost ) {
        superMatcher;
        support.attributes || !documentIsHTML ?
        support.deleteExpando = false;
        support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
        t = types.length;
        t = types.length;
        tabIndex: {
        target = arguments[ 0 ] || {},
        target = arguments[ i ] || {};
        target = this;
        target = {};
        teardown: function() {
        teardown: function() {
        this.easing = easing || jQuery.easing._default;
        this.elem = elem;
        this.end = end;
        this.isDefaultPrevented = returnTrue;
        this.isDefaultPrevented = src.defaultPrevented ||
        this.isImmediatePropagationStopped = returnTrue;
        this.isPropagationStopped = returnTrue;
        this.now = ( this.end - this.start ) * eased + this.start;
        this.options = options;
        this.originalEvent = src;
        this.prop = prop;
        this.start = this.now = this.cur();
        this.stopPropagation();
        this.type = src.type;
        this.type = src;
        this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
        this[ callback ] = true;
        thisCache = pvt ? cache[ id ] : cache[ id ].data;
        thisCache = thisCache.data;
        thisCache[ jQuery.camelCase( name ) ] = data;
        throw new Error( msg );
        throws: false,
        tick = function() {
        timeout: 0,
        timer = timers[ i ];
        timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
        timers = jQuery.timers,
        tmp = getAll( safe.appendChild( elem ), "script" );
        tmp, tag, tbody, wrap,
        tokens = match[0] = match[0].slice( 0 );
        traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
        traditional: false,
        transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
        truncate = until !== undefined;
        try {
        try {
        type = "POST";
        type = jQuery.type( obj );
        type = type || "fx";
        type = type || "fx";
        type: "GET",
        type: "GET",
        type: {
        typeof length === "number" && length > 0 && ( length - 1 ) in obj;
        types = ( types || "" ).match( rnotwhite ) || [ "" ];
        types = ( types || "" ).match( rnotwhite ) || [ "" ];
        unit = unit || initialInUnit[ 3 ];
        unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
        url = url.slice( 0, off );
        url: ajaxLocation,
        url: url,
        username: null,
        val :
        val = 0;
        val = curCSS( elem, name, styles );
        val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
        val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
        val = parseFloat( val ) || 0;
        value = args[ 0 ],
        value = props[ index ];
        value = props[ prop ];
        value;
        valueIsBorderBox = isBorderBox &&
        valueParts = valueParts || [];
        values = [],
        values[ index ] = jQuery._data( elem, "olddisplay" );
        var
        var args, proxy, tmp;
        var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
        var callbackInverse,
        var classes, elem, cur, curValue, clazz, j, finalValue,
        var classes, elem, cur, curValue, clazz, j, finalValue,
        var className, elem,
        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
        var contents, divStyle,
        var cur,
        var cur,
        var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
        var dataType,
        var destElements, node, clone, i, srcElements,
        var div, body, container;
        var docElem, win,
        var e = jQuery.extend(
        var e = this.originalEvent;
        var e = this.originalEvent;
        var e = this.originalEvent;
        var eased,
        var elem = this[ 0 ];
        var elem,
        var elem, type, id, data,
        var elems,
        var empty = jQuery.isEmptyObject( prop ),
        var handle, ontype, cur,
        var handleObj, type;
        var handler = function( event ) {
        var high = "0x" + escaped - 0x10000;
        var hooks = Tween.propHooks[ this.prop ];
        var hooks, ret, isFunction,
        var i = 0,
        var i = 0,
        var i,
        var i,
        var i, j, ret, matched, handleObj,
        var i, matches, sel, handleObj,
        var i, name, data,
        var i, prop, copy,
        var ignored = [];
        var isFunction = jQuery.isFunction( html );
        var j, handleObj, tmp,
        var key = type + "queueHooks";
        var key;
        var left, rs, rsLeft, ret,
        var len = +second.length,
        var len = this.length,
        var len;
        var length, i = 0;
        var length, value,
        var match, elem;
        var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
        var name = "on" + type;
        var name = elem.nodeName.toLowerCase();
        var name = elem.nodeName.toLowerCase();
        var name, propName,
        var name;
        var num, val, hooks,
        var offsetParent, offset,
        var parent = elem.parentNode;
        var prop,
        var queue = jQuery.queue( elem, type ),
        var queue;
        var realStringObj = obj && obj.toString();
        var ret = jQuery.map( this, fn, until );
        var ret = jQuery.merge( this.constructor(), elems );
        var ret = results || [];
        var ret, hooks,
        var ret, hooks,
        var ret, type, hooks,
        var script,
        var selected;
        var setter = 2;
        var stopQueue = function( hooks ) {
        var temp, i, elem,
        var timeout = window.setTimeout( next, time );
        var tmp,
        var tmp, events, t, handleObjIn,
        var tuples = [
        var type = typeof value;
        var val;
        var view = elem.ownerDocument.defaultView;
        var width, minWidth, maxWidth, ret,
        which = cssExpand[ i ];
        while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
        while ( ( elem = this[ i++ ] ) ) {
        while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
        while ( (cur = cur.nextSibling) ) {
        while ( (cur = cur.parentNode) ) {
        while ( (cur = cur.parentNode) ) {
        while ( (elem = results[i++]) ) {
        while ( (node = elem[i++]) ) {
        while ( ap[i] === bp[i] ) {
        while ( i-- ) {
        while ( i-- ) {
        while ( i-- ) {
        while ( i-- ) {
        while ( j < len ) {
        while ( j-- ) {
        while ( list.length ) {
        while ( t-- ) {
        while ( t-- ) {
        win = getWindow( doc );
        window.$ = _$;
        window.detachEvent( "onload", completed );
        window.event.type === "load" ||
        window.jQuery = _jQuery;
        window.removeEventListener( "load", completed );
        window[ callbackName ] = function() {
        xml = undefined;
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        } )
        } )
        } )
        } ) );
        } ) );
        } ),
        } ),
        } ).always( callback && function( jqXHR, status ) {
        } ).done( function( responseText ) {
        } ).end();
        } ).get();
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } );
        } :
        } :
        } :
        } :
        } :
        } ]
        } ];
        } catch ( e ) {
        } catch (e) {}
        } else if ( aup === bup ) {
        } else if ( document.addEventListener ) {
        } else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
        } else if ( jQuery.isFunction( selector ) ) {
        } else if ( parent.attachEvent ) {
        } else if ( s.jsonp !== false ) {
        } else if ( selector.nodeType ) {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else {
        } else { // IE
        } while (
        })
        }),
        }),
        }),
        }),
        }),
        }),
        }),
        }),
        }),
        }),
        });
        });
        });
        });
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        },
        }, ignored );
        }, implicitRelative, true ),
        }, implicitRelative, true ),
        }, jQuery.isPlainObject( url ) && url ) );
        }, method, val, arguments.length, null );
        }, name, value, arguments.length > 1 );
        }, null, value, arguments.length );
        }, null, value, arguments.length );
        };
        };
        };
        };
        };
        };
        };
        };
        };
        };
        };
        };
        };
        };
        };
        };
        };
        };
        };
        };
        };
        };
        };
        };
        };
        };
        };
     *    - AFTER param serialization (s.data is a string if s.processData is true)
     *    - BEFORE asking for a transport
     * 1) key is the dataType
     * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
     * 2) the catchall symbol "*" can be used
     * 2) These are called:
     * 3) key is the dataType
     * 3) selection will start with transport dataType and THEN go to "*" if needed
     * 4) the catchall symbol "*" can be used
     * 5) execution will start with transport dataType and THEN continue down to "*" if needed
     */
     */
    "ajaxComplete",
    "ajaxError",
    "ajaxSend"
    "ajaxStart",
    "ajaxStop",
    "ajaxSuccess",
    "cellPadding",
    "cellSpacing",
    "change select submit keydown keypress keyup error contextmenu" ).split( " " ),
    "colSpan",
    "contentEditable"
    "frameBorder",
    "maxLength",
    "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
    "readOnly",
    "rowSpan",
    "tabIndex",
    "useMap",
    ( compiled || compile( selector, match ) )(
    ) + "px";
    );
    );
    );
    );
    ---------------------------------------------------------------------- */
    ---------------------------------------------------------------------- */
    ---------------------------------------------------------------------- */
    ---------------------------------------------------------------------- */
    ---------------------------------------------------------------------- */
    /* Attributes
    /* Contains
    /* getElement(s)By*
    /* jshint eqeqeq: false */
    /* jshint validthis: true */
    /* Prefilters
    /* QSA/matchesSelector
    /* Sorting
    /* Transports bindings
    // "table", "table-cell", or "table-caption"
    // #11217 - WebKit loses check when the name is after the checked attribute
    // #7653, #8125, #8152: local protocol detection
    // (excepting IE8 booleans)
    // (IE normalizes it by default)
    // (IE uses .cssText instead)
    // (IE uses styleFloat instead of cssFloat)
    // (returning the new matched element set)
    // (such as loading iframes in IE - #4833)
    // (the latter of which guarantees us context)
    // (we check in cache first)
    // (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
    // (WebKit marks them as disabled)
    // 100x too small dimensions (gh-1764).
    // `in` check used to prevent JIT error (gh-2145)
    // `name` and `type` must use .setAttribute for WWA (#14901)
    // `type` must use .setAttribute for WWA (#14901)
    // A counter to track how many items to wait for before
    // A global GUID counter for objects
    // A simple way to check for HTML strings
    // about to be appended to the DOM in IE 6/7 (#8060)
    // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
    // Add in properties whose names you wish to fix before
    // Add in style property hooks for overriding the default
    // Add the callback
    // after removing valid tokens
    // All others
    // Allow instantiation without the 'new' keyword
    // An object can be passed to jQuery.data instead of a key/value pair; this gets
    // and return the corresponding response
    // are emptied (fx is the type by default)
    // aren't supported. They return false on IE (#2968).
    // arg is for internal usage only
    // arguments.
    // As in, an element does not contain itself
    // Assume jQuery is ready without the ready module
    // attach callbacks from options
    // Attempt to parse using the native JSON parser first
    // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
    // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
    // Avoid doing any more work than we need to when trying to get data on an
    // Behaves like an Array's method, not like a jQuery method.
    // behavior of getting and setting a style property
    // Bind a function to a context, optionally partially applying any
    // cache in order to avoid key collisions between internal data and user-defined
    // camelCase, specialEasing and expand cssHook pass
    // Can be adjusted by the user
    // Check for both converted-to-camel and non-converted data property names
    // check for vendor prefixed names
    // Check if a disconnected checkbox will retain its checked
    // Check if an input maintains its value after becoming a radio
    // Check if b follows a
    // Check if getElementById returns elements by name
    // Check if getElementsByTagName("*") returns only elements
    // Check if we can trust getAttribute("value")
    // Check if we're dealing with a known content-type
    // Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
    // Check to see if we have a response for the expected dataType
    // checked="checked" or checked
    // Class
    // cleanData must set properties to undefined rather than use removeAttribute
    // Clear input after sorting to release objects
    // Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
    // cloning other types of input fields
    // Compile and execute a filtering function if one is not provided
    // Convert dashed to camelCase; used by the css and data modules
    // Convert options from String-formatted to Object-formatted if needed
    // Convert to each sequential dataType
    // Counter for holding the number of active queries
    // Create a timestamp if incoming event doesn't have one
    // Create converters map with lowercased keys
    // Creates a full fledged settings object into target
    // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    // data from the HTML5 data-* attribute
    // data.
    // dataTypeExpression is optional and defaults to "*"
    // Default speed
    // Deferred helper
    // Define a local copy of jQuery
    // Define the hook, we'll check on the first run if it's really needed.
    // Destroy the cache
    // Detach an event or set of events from an element
    // Detect silently failing push.apply
    // Determine the position of an element within
    // Do not include comment or processing instruction nodes
    // Do not set data on non-element DOM nodes because it will not be cleared (#8335).
    // Document location
    // Document order sorting
    // documentElement is verified for cases where it doesn't yet exist
    // Don't automatically add "px" to these possibly-unitless properties
    // Easily-parseable/retrievable ID or TAG or CLASS selectors
    // Element contains another
    // error in IE
    // Event object
    // Event type
    // Execute a callback for every element in the matched set.
    // extend jQuery itself if only one argument is passed
    // Finish early in limited (non-browser) environments
    // First batch of tests.
    // Fix #11356: Clear elements from fragment
    // Fixing value retrieval on a button requires this module
    // Flatten any nested arrays
    // For all other browsers, use the standard XMLHttpRequest object
    // For internal use only.
    // For internal use only.
    // General-purpose constants
    // Get a promise resolved when queues of a certain type
    // Get and set the style property on a DOM Node
    // Get the Nth element in the matched element set OR
    // Get the style information from getAttribute
    // Get the whole matched element set as a clean array
    // Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
    // Handle a deep copy situation
    // Handle case when target is a string or something (possible in deep copy)
    // Handle event binding
    // Handle iff the expected data type is "jsonp" or we have a parameter to set
    // handle queue: false promises
    // Handle when the DOM is ready
    // hasOwn isn't used here due to false negatives
    // height/width overflow pass
    // Hold (or release) the ready event
    // href/src property should get the full normalized URL (#10299/#12915)
    // http://jsperf.com/thor-indexof-vs-for/5
    // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
    // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
    // http://www.w3.org/TR/css3-selectors/#whitespace
    // https://developer.mozilla.org/en-US/docs/CSS/display
    // ID find and filter
    // IE blanks contents when cloning scripts, and tries to evaluate newly-set text
    // IE leaves an \r character at EOL
    // IE strips leading whitespace when .innerHTML is used
    // IE will insert them into empty tables
    // IE10 throws NoModificationAllowedError if parent is null, #12132.
    // IE6-10 improperly clones children of object elements using classid.
    // IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
    // IE6-8 copies events bound via attachEvent when using cloneNode.
    // IE6-8 fails to return the selected option to the default selected
    // IE6-8 fails to set the defaultValue to the correct value when
    // If a data property was specified
    // If an array was passed in, assume that it is an array of form elements.
    // If it works, we need attrFixes when doing get/setAttribute (ie6/7)
    // If it's a function
    // If nothing was found internally, try to fetch any
    // If target is omitted, writes into ajaxSettings.
    // If there is already no cache entry for this object, there is no
    // If this is a noop like .hide().hide(), restore an overwritten display value
    // if we don't include width, step value is 2 to skip over Left and Right
    // If we found a dataType
    // If we have elements to modify, make the request
    // if we include width, step value is 1 to do all cssExpand values,
    // if we're just parsing
    // In IE 11 fullscreen elements inside of an iframe have
    // In IE/Edge using regex groups here causes severe slowdowns.
    // Includes some event props shared by KeyEvent and MouseEvent
    // Instance methods
    // Instance-specific data
    // Is the DOM ready to be used? Set to true once it occurs.
    // jQuery data() is stored in a separate object inside the object's internal data
    // jQuery.support is not used in Core but other projects attach their
    // Keep domManip exposed until 3.0 (gh-2225)
    // Last-Modified header cache for next request
    // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    // Local document vars
    // Main method
    // Make sure textarea (and checkbox) defaultValue is properly cloned
    // Make sure that a selected-by-default option has a working selected property.
    // Make sure that attribute selectors are quoted
    // Make sure that element opacity exists (as opposed to filter)
    // Make sure that link elements get serialized correctly by innerHTML
    // Make sure that tbody elements aren't automatically inserted
    // Make sure that the options inside disabled selects aren't marked as disabled
    // Make sure that URLs aren't manipulated
    // Make sure we trim BOM and NBSP
    // make the cloned public data object a copy from the original
    // Makes sure cloning an html5 element does not cause problems
    // Map over jQuery in case of overwrite
    // Map over the $ in case of overwrite
    // Mark it as fixed
    // Matches dashed string for camelizing
    // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
    // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
    // methods guaranteed to produce a unique set when starting from a unique set
    // Microsoft forgot to hump their vendor prefix (#9572)
    // Minified: var a,b,c,d
    // normalize opt.queue - true/undefined/null -> "fx"
    // not intended for public consumption - generates a queueHooks object,
    // Null elements to avoid leaks in IE.
    // Null elements to avoid leaks in IE.
    // object that has no data at all
    // old WebKit doesn't clone checked state correctly in fragments
    // Opera reports offsetWidths and offsetHeights less than zero on some elements
    // or returns the current one
    // Otherwise, build a param string
    // Otherwise, throw an error or return tokens
    // Piggyback on a donor event to simulate a different one
    // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
    // properties to it so it needs to exist.
    // Provide `match` to avoid retokenization if we modified the selector above
    // purpose in continuing
    // Purposefully self-exclusive
    // Put explicitly provided properties onto the event object
    // QSA and matchesSelector support
    // qSa(:focus) reports false when true (Chrome 21)
    // Queueing
    // readyState === "complete" is good enough for us to call the dom ready in oldIE
    // regarding Nodelist length in IE
    // Regular expressions
    // Remember the old values, and insert the new ones
    // Remove auto dataType and get content-type in the process
    // Removing the function wrapper causes a "Permission Denied"
    // Reset defaultChecked for any radios and checkboxes
    // results is for internal usage only
    // Return early from calls with invalid selector or context
    // Return early if doc is invalid or already selected
    // Return the length of the invalid excess
    // Return the modified object
    // Return the resulting serialization
    // Revert the old values
    // see here for display values:
    // See http://bugs.jquery.com/ticket/13378
    // See https://connect.microsoft.com/IE/feedback/details/1736512/
    // See https://github.com/jquery/sizzle/pull/225
    // See jQuery.data for more information
    // See setDocument()
    // See test/unit/core.js for details concerning isFunction.
    // Segment location into parts
    // Set contenteditable to false on removals(#10429)
    // Set document vars if needed
    // Set document vars if needed
    // Set document vars if needed
    // Set the display of most of the elements in a second loop
    // Set traditional to true for jQuery <= 1.3.2 behavior.
    // Set width and height to auto instead of 0 on empty string( Bug #8150 )
    // Sets many values
    // Sets one value
    // setting or getting the value
    // Setting to empty string throws an error as an invalid value
    // Setup
    // Setup
    // Setup
    // shallow copied over onto the existing cache
    // shortcut for names that are not vendor prefixed
    // Should return 1, but returns 4 (following)
    // show/hide pass
    // Since attributes and properties are the same in IE,
    // Since version 1.3, DOM methods and functions like alert
    // Single tag
    // so use "detach" method as fast way to get rid of the element
    // so use a roundabout getElementsByName test
    // So, we allow :focus to pass through QSA all the time to avoid the IE error
    // Some attributes are constructed with empty-string values when not defined
    // some non-html elements return undefined for offsetWidth, so check for null/undefined
    // Start with an empty selector
    // Start with offset property, which is equivalent to the border-box value
    // state when cloning options
    // Strict HTML recognition (#11290: must start with <)
    // Support: Android<4.0
    // Support: Android<4.1, IE<9
    // Support: Android<4.1, IE<9
    // Support: Firefox<29, Android 2.3
    // Support: IE 10-11, Edge 10240+
    // Support: IE 9-11, Edge
    // Support: IE11 only
    // Support: IE6-IE11+
    // Support: IE6-IE8
    // Support: IE8
    // Support: IE8 only
    // Support: IE<10
    // Support: IE<8
    // Support: IE<9
    // Support: IE<9
    // Support: IE<9
    // Support: IE<9
    // Support: IE<9
    // Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
    // Support: iOS 8.2 (not reproducible in simulator)
    // Support: Opera <= 12.12
    // Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
    // Support: Windows Web Apps (WWA)
    // Support: Windows Web Apps (WWA)
    // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
    // swappable if display is none or starts with table except
    // Tag
    // Take an array of elements and push it onto the stack
    // Test setAttribute on camelCase class.
    // Tests for enctype support on a form (#6743)
    // The broken getElementById methods don't pick up programatically-set names,
    // The current version of jQuery being used
    // The default length of a jQuery object is 0
    // The following elements (space-suffixed to avoid Object.prototype collisions)
    // the matched set of elements
    // the ready event fires. See #6781
    // This fixes almost every IE6/7 issue
    // This is for removals
    // This requires a wrapper element in IE
    // This transport only deals with cross domain requests
    // throw uncatchable exceptions if you attempt to set expando properties
    // to avoid the constant reflow
    // Try to minimize operations if there is only one selector in the list and no seed
    // Try to shortcut find operations (as opposed to filters) in HTML documents
    // Types can be a map of types/handlers
    // Unique for each copy of jQuery on the page
    // Unless we *know* we can detect duplicates, assume their presence
    // unless wrapped in a div with non-breaking characters in front of it.
    // Update global variables
    // Use a stripped-down indexOf as it's faster than native
    // Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
    // Use IE sourceIndex if available on both nodes
    // use the active box-sizing model to add/subtract irrelevant styles
    // Use this for any attribute in IE6/7
    // Used by jQuery.camelCase as callback to replace()
    // Used for iframes
    // value of true after appended to the DOM (IE6/7)
    // Vendor-prefix box-sizing
    // Verify style float existence
    // Verify that getAttribute really returns attributes and not properties
    // We add the dataType to the list if needed
    // We allow this because of a bug in IE8/9 that throws an error
    // We can't cloneNode fragments that contain checked, in WebKit
    // We do not need to do anything for non-Elements
    // We don't have any data stored on the element,
    // When all else fails, undefined
    // whenever `document.activeElement` is accessed on an iframe
    // Where outerHTML is undefined, this still works
    // with both ajaxSettings and settings fields.
    // Workarounds based on findings by Jim Driscoll
    _$ = window.$;
    _data: function( elem, name, data ) {
    _default: "swing"
    _default: 400
    _default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    _default: {
    _jQuery = window.jQuery,
    _queueHooks: function( elem, type ) {
    _removeData: function( elem, name ) {
    a = div.getElementsByTagName( "a" )[ 0 ];
    a = div.getElementsByTagName( "a" )[ 0 ];
    a.style.cssText = "top:1px";
    accepts: {
    active: 0,
    add: function( elem, types, handler, data, selector ) {
    add: function( selector, context ) {
    addBack: function( selector ) {
    addClass: function( value ) {
    addHandle( "type|href|height|width", function( elem, name, isXML ) {
    addHandle( "value", function( elem, name, isXML ) {
    addHandle( booleans, function( elem, name, isXML ) {
    after: function() {
    ajax: function( url, options ) {
    ajaxLocation = location.href,
    ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];
    ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
    ajaxSettings: {
    ajaxSetup: function( target, settings ) {
    ajaxTransport: addToPrefiltersOrTransports( transports ),
    allTypes = "*/".concat( "*" ),
    animate: function( prop, speed, easing, callback ) {
    append: function() {
    appendTo: "append",
    area: [ 1, "<map>", "</map>" ],
    args = concat.apply( [], args );
    arr = [],
    arr[ preferredDoc.childNodes.length ].nodeType;
    attr: function( elem, name, value ) {
    attr: function( name, value ) {
    attrHandle = jQuery.expr.attrHandle,
    attrHandle.id = attrHandle.name = attrHandle.coords =
    attrHandle: {},
    attrHooks: {
    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
    before: function() {
    bind: function( types, data, fn ) {
    body = document.getElementsByTagName( "body" )[ 0 ];
    body.appendChild( container ).appendChild( div );
    body.removeChild( container );
    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
    border: "Width"
    break;
    cache: {},
    cacheLength: 50,
    camelCase: function( string ) {
    children: function( elem ) {
    class2type[ "[object " + name + "]" ] = name.toLowerCase();
    classCache = createCache(),
    cleanData: function( elems, /* internal */ forceAcceptData ) {
    clearQueue: function( type ) {
    clone: function( dataAndEvents, deepDataAndEvents ) {
    clone: function( elem, dataAndEvents, deepDataAndEvents ) {
    closest: function( selectors, context ) {
    col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
    compile,
    compilerCache = createCache(),
    constructor: jQuery,
    constructor: jQuery.Event,
    constructor: Tween,
    container = document.createElement( "div" );
    container = document.createElement( "div" );
    container.appendChild( div );
    container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
    container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
    contains = hasCompare || rnative.test( docElem.contains ) ?
    contains,
    contents: function( elem ) {
    contents: {
    context = context || document;
    converters: {
    createPseudo: markFunction,
    createStandardXHR;
    css: function( elem, name, extra, styles ) {
    css: function( name, value ) {
    cssHooks: {
    cssNormalTransform = {
    cssNumber: {
    cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
    cssProps: {
    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
    cur: function() {
    curCSS = function( elem, name, computed ) {
    curCSS = function( elem, name, computed ) {
    current = dataTypes.shift();
    data: function( elem, name, data ) {
    data: function( key, value ) {
    Deferred: function( func ) {
    define( "jquery", [], function() {
    delegate: function( selector, types, data, fn ) {
    dequeue: function( elem, type ) {
    dequeue: function( type ) {
    detach: function( selector ) {
    dirruns = 0,
    dispatch: function( event ) {
    div = document.createElement( "div" );
    div = document.createElement( "div" );
    div = null;
    div = null;
    div.appendChild( input );
    div.appendChild( input );
    div.cloneNode( true ).style.backgroundClip = "";
    div.firstChild.setAttribute( "value", "" );
    div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    div.innerHTML = "";
    div.innerHTML = "<a href='#'></a>";
    div.innerHTML = "<input/>";
    div.innerHTML = "<textarea>x</textarea>";
    div.setAttribute( "className", "t" );
    div.style.backgroundClip = "content-box";
    div.style.cssText = "float:left;opacity:.5";
    div[ jQuery.expando ] = 1;
    do {
    docElem = document.documentElement;
    docElem,
    document = doc;
    document,
    documentIsHTML = !isXML( document );
    documentIsHTML,
    domManip: domManip,
    done = 0,
    each: function( callback ) {
    each: function( obj, callback ) {
    elem.detach();
    elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
    elemdisplay = {
    empty: function() {
    emptyStyle = document.createElement( "div" ).style;
    end: function() {
    eq: function( i ) {
    error: function( msg ) {
    etag: {},
    expando = "sizzle" + 1 * new Date(),
    expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
    expr = expr.replace( rattributeQuotes, "='$1']" );
    Expr,
    Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
    Expr.find["TAG"] = support.getElementsByTagName ?
    Expr.pseudos[ i ] = createButtonPseudo( i );
    Expr.pseudos[ i ] = createInputPseudo( i );
    fadeIn: { opacity: "show" },
    fadeOut: { opacity: "hide" },
    fadeTo: function( speed, to, easing, callback ) {
    fadeToggle: { opacity: "toggle" }
    fast: 200,
    fcamelCase = function( all, letter ) {
    filter: function( selector ) {
    filter: {
    find: function( selector ) {
    find: {},
    finish: function( type ) {
    first: function() {
    fix: function( event ) {
    fixHooks: {},
    fn[ expando ] = true;
    for ( ; ( elem = elems[ i ] ) != null; i++ ) {
    for ( ; ( node = elems[ i ] ) != null; i++ ) {
    for ( ; i < 4 ; i += 2 - includeWidth ) {
    for ( ; i < 4; i += 2 ) {
    for ( ; i < l; i++ ) {
    for ( ; i < len; i++ ) {
    for ( ; i < len; i++ ) {
    for ( ; i < len; i++ ) {
    for ( ; i < len; i++ ) {
    for ( ; i < length; i++ ) {
    for ( ; i < timers.length; i++ ) {
    for ( ; index < length ; index++ ) {
    for ( ; index < length; index++ ) {
    for ( ; index < length; index++ ) {
    for ( ; n; n = n.nextSibling ) {
    for ( i in { submit: true, change: true, focusin: true } ) {
    for ( index = 0; index < length; index++ ) {
    for ( index in props ) {
    for ( key in src ) {
    for ( name in obj ) {
    for ( name in options ) {
    for ( name in options ) {
    for ( prop in props ) {
    fragment.appendChild( div );
    fragment.appendChild( input );
    fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );
    function cache( key, value ) {
    function computeStyleTests() {
    function inspect( dataType ) {
    function( a, b ) {
    function( a, b ) {
    function( defaultExtra, funcName ) {
    function( elem, computed ) {
    function( elem, computed ) {
    function( elem, type, handle ) {
    function( elem, type, handle ) {
    function( i, name ) {
    function() {
    funescape = function( _, escaped, escapedWhitespace ) {
    fxNow = jQuery.now();
    fxNow = undefined;
    fxNow, timerId,
    get: function( num ) {
    getJSON: function( url, data, callback ) {
    getScript: function( url, callback ) {
    getSetAttribute = support.getSetAttribute,
    getSetInput = support.input;
    getStyles = function( elem ) {
    getStyles = function( elem ) {
    getText,
    global: {},
    globalEval: function( data ) {
    grep: function( elems, callback, invert ) {
    groups = [];
    guaranteedUnique = {
    guid: 1,
    handlers: function( event, handlers ) {
    has: function( target ) {
    hasClass: function( selector ) {
    hasCompare = rnative.test( docElem.compareDocumentPosition );
    hasData: function( elem ) {
    hasDuplicate = !support.detectDuplicates;
    hasDuplicate,
    hasOwn = ({}).hasOwnProperty,
    hide: function() {
    holdReady: function( hold ) {
    hover: function( fnOver, fnOut ) {
    html: function( value ) {
    htmlPrefilter: function( html ) {
    i = 0;
    identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
    if ( !( this instanceof jQuery.Event ) ) {
    if ( !acceptData( elem ) ) {
    if ( !acceptData( elem ) ) {
    if ( !body || !body.style ) {
    if ( !cache[ id ] ) {
    if ( !cache[ id ] ) {
    if ( !cached ) {
    if ( !data || typeof data !== "string" ) {
    if ( !data || typeof data !== "string" ) {
    if ( !display ) {
    if ( !div.style ) {
    if ( !found ) {
    if ( !id ) {
    if ( !jQuery.isEmptyObject( orig ) ) {
    if ( !nodeType ) {
    if ( !opts.queue ) {
    if ( !pvt ) {
    if ( !pvt ) {
    if ( !readyList ) {
    if ( !rmargin.test( prefix ) ) {
    if ( !seed ) {
    if ( !support.appendChecked ) {
    if ( !support.checkOn ) {
    if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
    if ( !timerId ) {
    if ( !timers.length ) {
    if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
    if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
    if ( ( context.ownerDocument || context ) !== document ) {
    if ( ( elem.ownerDocument || elem ) !== document ) {
    if ( ( elem.ownerDocument || elem ) !== document ) {
    if ( (parent = document.defaultView) && parent.top !== parent ) {
    if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
    if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
    if ( cached ) {
    if ( ct ) {
    if ( cur ) {
    if ( curData.data ) {
    if ( data !== undefined ) {
    if ( data == null && fn == null ) {
    if ( data === undefined && elem.nodeType === 1 ) {
    if ( dataTypes[ 0 ] in responses ) {
    if ( dataTypes[ 1 ] ) {
    if ( deep && window.jQuery === jQuery ) {
    if ( deep ) {
    if ( dest.nodeType !== 1 ) {
    if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
    if ( diff ) {
    if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
    if ( document.addEventListener ) {
    if ( document.addEventListener ||
    if ( document.msFullscreenElement && window.top !== window ) {
    if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
    if ( events ) {
    if ( finalDataType ) {
    if ( fn === false ) {
    if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
    if ( hasDuplicate ) {
    if ( i === length ) {
    if ( includeWidth ) {
    if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
    if ( isFunction ||
    if ( isNode ) {
    if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
    if ( jQuery.isArray( obj ) ) {
    if ( jQuery.isFunction( animation.opts.start ) ) {
    if ( jQuery.isFunction( params ) ) {
    if ( jQuery.isFunction( qualifier ) ) {
    if ( jQuery.type( key ) === "object" ) {
    if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
    if ( l ) {
    if ( match ) {
    if ( match.length === 1 ) {
    if ( name ) {
    if ( name in emptyStyle ) {
    if ( nodeName === "script" && dest.text !== src.text ) {
    if ( not ) {
    if ( off > -1 ) {
    if ( one === 1 ) {
    if ( opt.queue == null || opt.queue === true ) {
    if ( opts.overflow ) {
    if ( parsed ) {
    if ( postFilter && !postFilter[ expando ] ) {
    if ( postFinder && !postFinder[ expando ] ) {
    if ( props ) {
    if ( qualifier.nodeType ) {
    if ( rcheckableType.test( elem.type ) ) {
    if ( s.cache === undefined ) {
    if ( s.crossDomain ) {
    if ( s.crossDomain ) {
    if ( s.crossDomain ) {
    if ( safeFrag.createElement ) {
    if ( scripts && scripts.length ) {
    if ( self.length > 0 ) {
    if ( src && src.type ) {
    if ( support.getById ) {
    if ( support.matchesSelector && documentIsHTML &&
    if ( timer() ) {
    if ( tmp ) {
    if ( traditional === undefined ) {
    if ( type === "function" || jQuery.isWindow( obj ) ) {
    if ( typeof context === "boolean" ) {
    if ( typeof div.style.zoom !== "undefined" ) {
    if ( typeof module === "object" && typeof module.exports === "object" ) {
    if ( typeof name === "object" || typeof name === "function" ) {
    if ( typeof name === "string" ) {
    if ( typeof qualifier === "string" ) {
    if ( typeof selector !== "string" || !selector ||
    if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
    if ( typeof target === "boolean" ) {
    if ( typeof types === "object" ) {
    if ( typeof url !== "string" && _load ) {
    if ( val <= 0 || val == null ) {
    if ( valueParts ) {
    if ( window.$ === jQuery ) {
    if ( window.JSON && window.JSON.parse ) {
    inArray: function( elem, arr, i ) {
    includeWidth = includeWidth ? 1 : 0;
    index: function( elem ) {
    indexOf = function( list, elem ) {
    init = jQuery.fn.init = function( selector, context, root ) {
    init: function( elem, options, prop, end, easing, unit ) {
    input = document.createElement( "input" );
    input = document.createElement( "input" );
    input.checked = true;
    input.setAttribute( "checked", "checked" );
    input.setAttribute( "name", "t" );
    input.setAttribute( "type", "checkbox" );
    input.setAttribute( "type", "radio" );
    input.setAttribute( "type", "radio" );
    input.setAttribute( "value", "" );
    input.type = "checkbox";
    input.value = "t";
    insertAfter: "after",
    insertBefore: "before",
    is: function( selector ) {
    isArray: Array.isArray || function( obj ) {
    isDefaultPrevented: returnFalse,
    isEmptyObject: function( obj ) {
    isFunction: function( obj ) {
    isImmediatePropagationStopped: returnFalse,
    isNumeric: function( obj ) {
    isPlainObject: function( obj ) {
    isPropagationStopped: returnFalse,
    isReady: false,
    isReady: true,
    isWindow: function( obj ) {
    isXML,
    jQuery = function( selector, context ) {
    jQuery.ajaxTransport( function( options ) {
    jQuery.attrHooks.contenteditable = {
    jQuery.attrHooks.style = {
    jQuery.attrHooks.value = {
    jQuery.cssHooks.opacity = {
    jQuery.cssHooks[ name ] = {
    jQuery.cssHooks[ prefix + suffix ] = {
    jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
    jQuery.each( [ "href", "src" ], function( i, name ) {
    jQuery.each( [ "width", "height" ], function( i, name ) {
    jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
    jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
    jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
    jQuery.event.special.change = {
    jQuery.event.special.submit = {
    jQuery.event.special[ orig ] = {
    jQuery.extend( support, {
    jQuery.fn[ method ] = function( val ) {
    jQuery.fn[ name ] = function( data, fn ) {
    jQuery.fn[ name ] = function( selector ) {
    jQuery.fn[ name ] = function( speed, easing, callback ) {
    jQuery.fn[ name ] = function( speed, easing, callback ) {
    jQuery.fn[ name ] = function( until, selector ) {
    jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
    jQuery.fn[ type ] = function( fn ) {
    jQuery.fx.timer(
    jQuery.map( props, createTween, animation );
    jQuery.propFix.enctype = "encoding";
    jQuery.propFix[ this.toLowerCase() ] = this;
    jQuery.propHooks.selected = {
    jQuery.ready.promise().done( fn );
    jQuery.timers.push( timer );
    jQuery.valHooks.button = {
    jQuery.valHooks[ this ] = {
    jquery: version,
    jQuery[ method ] = function( url, data, callback, type ) {
    jsonp: "callback",
    jsonpCallback: function() {
    keyHooks: {
    last: function() {
    lastModified: {},
    legend: [ 1, "<fieldset>", "</fieldset>" ],
    length: 0,
    linear: function( p ) {
    makeArray: function( arr, results ) {
    map: function( callback ) {
    map: function( elems, callback, arg ) {
    margin: "",
    match: matchExpr,
    matches,
    matchExpr = {
    MAX_NEGATIVE = 1 << 31,
    merge: function( first, second ) {
    mouseenter: "mouseover",
    mouseHooks: {
    mouseleave: "mouseout",
    next: function( elem ) {
    nextAll: function( elem ) {
    nextUntil: function( elem, i, until ) {
    noData: {
    nodeHook = {
    nodeName = dest.nodeName.toLowerCase();
    nodeName: function( elem, name ) {
    noop: function() {},
    not: function( selector ) {
    now: function() {
    off: function( types, selector, fn ) {
    offset: function( options ) {
    offsetParent: function() {
    on: function( types, selector, data, fn ) {
    one: function( types, selector, data, fn ) {
    opt.complete = function() {
    opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
    opt.old = opt.complete;
    option: [ 1, "<select multiple='multiple'>", "</select>" ],
    options = typeof options === "string" ?
    outermostContext,
    padding: "",
    param: [ 1, "<object>", "</object>" ],
    parent: function( elem ) {
    parents: function( elem ) {
    parentsUntil: function( elem, i, until ) {
    parsed = buildFragment( [ data ], context, scripts );
    pointerenter: "pointerover",
    pointerleave: "pointerout"
    pop = arr.pop,
    position: function() {
    preferredDoc = window.document,
    prefilter: function( callback, prepend ) {
    preFilter: {
    preFilters = Expr.preFilter;
    prefilters = {},
    prefilters: [ defaultPrefilter ],
    prepend: function() {
    prependTo: "prepend",
    prev: function( elem ) {
    prevAll: function( elem ) {
    preventDefault: function() {
    prevUntil: function( elem, i, until ) {
    promise: function( type, obj ) {
    prop: function( elem, name, value ) {
    prop: function( name, value ) {
    propFilter( props, animation.opts.specialEasing );
    propFix: {
    propHooks: {
    props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
    proxy: function( fn, context ) {
    pseudos = ":(" + identifier + ")(?:\\((" +
    pseudos: {
    push = arr.push,
    push = { apply: arr.length ?
    push.apply(
    push: push,
    push_native = arr.push,
    pushStack: function( elems ) {
    queue: function( elem, type, data ) {
    queue: function( type, data ) {
    rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
    rbracket = /\[\]$/,
    rbuggyMatches = [];
    rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
    rbuggyMatches,
    rbuggyQSA = [];
    rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
    rbuggyQSA,
    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    rclickable = /^(?:a|area)$/i;
    rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
    rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
    rCRLF = /\r?\n/g,
    rdashAlpha = /-([\da-z])/gi,
    rdisplayswap = /^(none|table(?!-c[ea]).+)/,
    ready: function( wait ) {
    readyWait: 1,
    relative: {
    remove: function( elem, types, handler, selector, mappedTypes ) {
    remove: function( selector ) {
    removeAttr: function( elem, value ) {
    removeAttr: function( name ) {
    removeClass: function( value ) {
    removeData: function( elem, name ) {
    removeData: function( key ) {
    removeProp: function( name ) {
    replaceAll: "replaceWith"
    replaceWith: function() {
    rescape = /'|\\/g,
    results = results || [];
    results = results || [];
    results.sort( sortOrder );
    ret = callback.apply( elem, args || [] );
    return !jQuery.expr.filters.hidden( elem );
    return ( fxNow = jQuery.now() );
    return ( val +
    return a ? 1 : -1;
    return adjusted;
    return animation.progress( animation.opts.progress )
    return attrs;
    return bySet ?
    return cache;
    return cached;
    return chainable ?
    return collection;
    return combinator.first ?
    return contains( context, elem );
    return context && typeof context.getElementsByTagName !== "undefined" && context;
    return cur;
    return data;
    return display;
    return display;
    return div.firstChild.getAttribute( "value" ) === "";
    return div.firstChild.getAttribute("href") === "#" ;
    return div.getAttribute("disabled") == null;
    return div1.compareDocumentPosition( document.createElement("div") ) & 1;
    return document;
    return documentElement ? documentElement.nodeName !== "HTML" : false;
    return elem.each( function() {
    return elem.style && elem.style.display || jQuery.css( elem, "display" );
    return elem;
    return elem;
    return elem;
    return elementMatcher( matchers );
    return elements;
    return elems.length === 1 && elem.nodeType === 1 ?
    return false;
    return false;
    return fn;
    return function( dataTypeExpression, func ) {
    return function( elem ) {
    return function( elem ) {
    return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
    return jQuery.ajax( {
    return jQuery.attr( elem, "class" ) || "";
    return jQuery.grep( elements, function( elem ) {
    return jQuery.grep( jQuery.timers, function( fn ) {
    return jQuery.isWindow( elem ) ?
    return jQuery.merge( [], parsed.childNodes );
    return jQuery.nodeName( elem, "table" ) &&
    return jQuery;
    return markFunction(function( argument ) {
    return markFunction(function( seed, results, context, xml ) {
    return matched;
    return matched;
    return matchers.length > 1 ?
    return matches ?
    return new Tween.prototype.init( elem, options, prop, end, easing );
    return newUnmatched;
    return nodeType !== 1 && nodeType !== 9 ?
    return object;
    return opt;
    return parseOnly ?
    return readyList.promise( obj );
    return results;
    return results;
    return results;
    return ret;
    return ret;
    return ret;
    return s.join( "&" ).replace( r20, "+" );
    return safe;
    return safeFrag;
    return select( selector.replace( rtrim, "$1" ), context, results, seed );
    return selector;
    return self;
    return Sizzle( expr, document, null, [ elem ] ).length > 0;
    return Sizzle( expr, null, null, elements );
    return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {
    return support.reliableHiddenOffsets() ?
    return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
    return target;
    return target;
    return this.length;
    return this.queue( type, function( next, hooks ) {
    return this;
    return this;
    return true;
    return true;
    return type === "array" || length === 0 ||
    return val !== undefined ?
    return val;
    return xml;
    return {
    return { state: "success", data: response };
    rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
    rfxtypes = /^(?:toggle|show|hide)$/,
    rhash = /#.*$/,
    rheader = /^h\d$/i,
    rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    ridentifier = new RegExp( "^" + identifier + "$" ),
    rinputs = /^(?:input|select|textarea|button)$/i,
    rjsonp = /(=)\?(?=&|$)|\?\?/;
    rkeyEvent = /^key/,
    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    rmsPrefix = /^-ms-/,
    rmultiDash = /([A-Z])/g;
    rnative = /^[^{]+\{\s*\[native \w/,
    rnoContent = /^(?:GET|HEAD)$/,
    rnoInnerhtml = /<script|<style|<link/i,
    rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
    rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
    ropacity = /opacity\s*=\s*([^)]*)/i,
    rposition = /^(top|right|bottom|left)$/;
    rprotocol = /^\/\//,
    rpseudo = new RegExp( pseudos ),
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    rrun = /queueHooks$/;
    rscriptTypeMasked = /^true\/(.*)/,
    rsibling = /[+~]/,
    rspaces = /[\x20\t\r\n\f]+/g;
    rsubmittable = /^(?:input|select|textarea|keygen)/i;
    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
    rtbody = /<tbody/i;
    rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
    rts = /([?&])_=[^&]*/,
    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    run: function( percent ) {
    runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
    rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    ruseDefault = /^(?:checked|selected)$/i,
    rwhitespace = new RegExp( whitespace + "+", "g" ),
    rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    safeFragment = createSafeFragment( document ),
    select,
    select.disabled = true;
    selector: "",
    serialize: function() {
    serializeArray: function() {
    set: function( elem, value, name ) {
    set: function( tween ) {
    setDocument,
    setOffset: function( elem, options, i ) {
    show: function() {
    siblings: function( elem ) {
    simulate: function( type, elem, event ) {
    slice = arr.slice,
    slice: function() {
    slideDown: genFx( "show" ),
    slideToggle: genFx( "toggle" ),
    slideUp: genFx( "hide" ),
    slow: 600,
    soFar = selector;
    sort: deletedIds.sort,
    sortInput = !support.sortStable && results.slice( 0 );
    sortInput = null;
    sortInput,
    sortOrder = function( a, b ) {
    sortOrder = hasCompare ?
    special: {
    splice: deletedIds.splice
    stop: function( type, clearQueue, gotoEnd ) {
    stopImmediatePropagation: function() {
    stopPropagation: function() {
    style: function( elem, name, value, extra ) {
    support,
    support.appendChecked = input.checked;
    support.attributes = !div.getAttribute( jQuery.expando );
    support.attributes = assert(function( div ) {
    support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
    support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
    support.checkOn = !!input.value;
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    support.cssFloat = !!div.style.cssFloat;
    support.deleteExpando = true;
    support.enctype = !!document.createElement( "form" ).enctype;
    support.getById = assert(function( div ) {
    support.getElementsByClassName = rnative.test( document.getElementsByClassName );
    support.getElementsByTagName = assert(function( div ) {
    support.getSetAttribute = div.className !== "t";
    support.hrefNormalized = a.getAttribute( "href" ) === "/a";
    support.html5Clone =
    support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;
    support.input = input.getAttribute( "value" ) === "";
    support.leadingWhitespace = div.firstChild.nodeType === 3;
    support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
    support.noCloneEvent = !!div.addEventListener;
    support.opacity = div.style.opacity === "0.5";
    support.optDisabled = !opt.disabled;
    support.optSelected = opt.selected;
    support.radioValue = input.value === "t";
    support.shrinkWrapBlocks = function() {
    support.style = /top/.test( a.getAttribute( "style" ) );
    support.tbody = !div.getElementsByTagName( "tbody" ).length;
    support: support
    swing: function( p ) {
    td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
    text: function( value ) {
    thead: [ 1, "<table>", "</table>" ],
    this.timeStamp = src && src.timeStamp || jQuery.now();
    this[ jQuery.expando ] = true;
    thisCache = cache[ id ];
    throw new Error( "Syntax error, unrecognized expression: " + msg );
    time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
    timerId = null;
    tmp = null;
    toArray: function() {
    toggle: function( state ) {
    toggleClass: function( value, stateVal ) {
    tokenCache = createCache(),
    tokenize,
    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
    transports = {},
    trigger: function( event, data, elem, onlyHandlers ) {
    trigger: function( type, data ) {
    triggerHandler: function( type, data ) {
    trim: function( text ) {
    try {
    try {
    try {
    try {
    try {
    try {
    tweener: function( props, callback ) {
    tweeners: {
    type = type || "fx";
    type: function( obj ) {
    unbind: function( types, fn ) {
    undelegate: function( selector, types, fn ) {
    unloadHandler = function() {
    unwrap: function() {
    val: function( value ) {
    valHooks: {
    var // Flag to know if list is currently firing
    var a,
    var adjusted,
    var arr = attrs.split("|"),
    var bySet = setMatchers.length > 0,
    var callbackName, overwritten, responseContainer,
    var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
    var checkContext, matcher, j,
    var conv2, current, conv, tmp, prev,
    var cssFn = jQuery.fn[ name ];
    var cur = b && a,
    var deep, key,
    var dir = combinator.dir,
    var display, elem, hidden,
    var div = document.createElement( "div" ),
    var div = document.createElement( "div" );
    var div = document.createElement("div");
    var doc = document,
    var documentElement = elem && (elem.ownerDocument || elem).documentElement;
    var elem = elems[ 0 ];
    var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
    var elem,
    var elem,
    var elem,
    var elems, elem,
    var first, node, hasScripts,
    var firstDataType, ct, finalDataType, type,
    var fn = Expr.attrHandle[ name.toLowerCase() ],
    var getter = attrHandle[ name ] || jQuery.find.attr;
    var hasCompare, parent,
    var i = 0,
    var i = 0,
    var i = 0,
    var i = extra === ( isBorderBox ? "border" : "content" ) ?
    var i,
    var i, eventName,
    var i, tokens, token, type, find,
    var index, name, easing, value, hooks;
    var inspected = {},
    var j, elem, contains,
    var keys = [];
    var length = !!obj && "length" in obj && obj.length,
    var list = nodeNames.split( "|" ),
    var m, i, elem, nid, nidselect, match, groups, newSelector,
    var match = rscriptTypeMasked.exec( elem.type );
    var matched = [],
    var matched = [];
    var matched, match, tokens, type,
    var matches = rnumsplit.exec( value );
    var name;
    var name;
    var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
    var node,
    var node,
    var nodeName, e, data;
    var object = {};
    var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
    var origFn, type;
    var parsed = rsingleTag.exec( data ),
    var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
    var prefix,
    var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
    var requireNonComma,
    var result,
    var ret, name,
    var ret, thisCache,
    var selector, type, response,
    var shrinkWrapBlocksVal;
    var src, copyIsArray, copy, name, options, clone,
    var thisCache, i,
    var timer,
    var top = /Y/.test( prop );
    var tween,
    var type, i, l,
    var val, div, body, container;
    var valueIsBorderBox = true,
    var which,
    var xml, tmp;
    version = "1.12.2",
    when: function( subordinate /* , ..., subordinateN */ ) {
    while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
    while ( ( elem = nodes[ i++ ] ) ) {
    while ( current ) {
    while ( dataTypes[ 0 ] === "*" ) {
    while ( elem && elem.nodeType === 1 ) {
    while ( i-- ) {
    while ( i-- ) {
    while ( soFar ) {
    whitespace = "[\\x20\\t\\r\\n\\f]",
    window.attachEvent( "onunload", function() {
    window.clearInterval( timerId );
    window.jQuery = window.$ = jQuery;
    window.setTimeout( function() {
    wrap: function( html ) {
    wrapAll: function( html ) {
    wrapInner: function( html ) {
    xhrCallbacks = {},
    xhrSupported = jQuery.ajaxSettings.xhr();
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    } ) ) ?
    } ).length;
    } );
    } );
    } );
    } );
    } );
    } );
    } );
    } );
    } );
    } );
    } );
    } );
    } );
    } );
    } :
    } :
    } :
    } catch ( e ) {
    } catch ( e ) {
    } catch ( e ) {}
    } catch ( e ) {}
    } catch ( err ) { }
    } catch (e) {
    } else if ( !fn ) {
    } else if ( !traditional && jQuery.type( obj ) === "object" ) {
    } else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
    } else if ( fn == null ) {
    } else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
    } else if ( nodeName === "input" || nodeName === "textarea" ) {
    } else if ( nodeName === "object" ) {
    } else if ( nodeName === "option" ) {
    } else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
    } else if ( nodeType === 3 || nodeType === 4 ) {
    } else if ( params && typeof params === "object" ) {
    } else if ( support.deleteExpando || cache != cache.window ) {
    } else if ( value !== undefined ) {
    } else {
    } else {
    } else {
    } else {
    } else {
    } else {
    } else {
    } else {
    } else {
    } else {
    } else {
    } else {
    } finally {
    } while ( cur && cur.nodeType !== 1 );
    });
    });
    });
    });
    });
    });
    });
    });
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    },
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
    };
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *                  after the list has been fired right away with the latest "memorized"
 *                  values (like a Deferred)
 *          the callback list behaves or a more traditional option object
 *  deleting the oldest entry
 *  memory:         will keep track of previous values and will call any callback added
 *  once:           will ensure the callback list can only be fired once (like a Deferred)
 *  options: an optional list of space-separated options that will change how
 *  property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *  selector function built with Sizzle.compile
 *  selector functions
 *  stopOnFalse:    interrupt callings when a callback returns false
 *  unique:         will ensure a callback can only be added once (no duplicate in the list)
 * "fired" multiple times.
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 * @param {ArrayLike} results
 * @param {Array|Element} elem
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 * @param {Element|Object=} context
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @param {Element|Object} elem An element or a document
 * @param {Element} a
 * @param {Element} b
 * @param {Element} context
 * @param {Function} fn
 * @param {Function} fn Passed the created div and expects a boolean result
 * @param {Function} fn The function to mark
 * @param {Function} handler The method that will be applied
 * @param {Object} doc Document object
 * @param {String|Function} selector A selector or a pre-compiled
 * @param {String} attrs Pipe-separated list of attributes
 * @param {String} name nodeName of the element
 * @param {String} nodeName
 * @param {String} type
 * @param {String} type
 * @returns {Boolean} True iff elem is a non-HTML XML node
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 * @returns {Object} Returns the current document
 * A low-level selection function that works with Sizzle's compiled
 * Adds the same handler for all of the specified attrs
 * Also sets the responseXXX fields on the jqXHR instance
 * By default a callback list will act like an event callback list and can be
 * Checks a node for validity as a Sizzle context
 * Checks document order of two siblings
 * Clean-up method for dom ready events
 * Copyright jQuery Foundation and other contributors
 * Copyright jQuery Foundation and other contributors
 * Create a callback list using the following parameters:
 * Create key-value caches of limited size
 * Date: 2015-10-17
 * Date: 2016-03-17T17:44Z
 * Detects XML nodes
 * Document sorting and removing duplicates
 * Gets a window from an element
 * Helper functions for managing events -- not part of the public interface.
 * http://jquery.com/
 * http://jquery.org/license
 * http://jquery.org/license
 * http://sizzlejs.com/
 * http://sizzlejs.com/
 * Includes Sizzle.js
 * jQuery JavaScript Library v1.12.2
 * Load a url into a page
 * Mark a function for special use by Sizzle
 * Possible options:
 * Props to Dean Edwards' addEvent library for many of the ideas.
 * Released under the MIT license
 * Released under the MIT license
 * Retrieve the actual display of a element
 * Returns a function to use in pseudos for buttons
 * Returns a function to use in pseudos for input types
 * Returns a function to use in pseudos for positionals
 * Sets document-related variables once based on the current document
 * Sizzle CSS Selector Engine v2.2.1
 * Support testing using an element
 * The ready event handler and self cleanup method
 * Try to determine the default display value of an element
 * Utility function for retrieving the text value of an array of DOM nodes
 */
 */
 */
 */
 */
 */
 */
 */
 */
 */
 */
 */
 */
 */
 */
 */
 */
 */
 */
 */
 */
 */
 */
 */
 */
 */
( function() {
( function() {
( function() {
( function() {
( function() {
( function() {
(function( global, factory ) {
(function( window ) {
);
);
/*
/*
/* Chain conversions given the request and the original response
/* Handles responses to an ajax request:
/* jshint ignore: end */
/* jshint ignore: start */
/*!
/*!
/**
/**
/**
/**
/**
/**
/**
/**
/**
/**
/**
/**
/**
/**
/**
/**
/**
/**
/**
/**
//
//
// (This is still attached to ajaxSettings for backward compatibility)
// A central reference to the root jQuery(document)
// A special extend for ajax options
// Accessing the selectedIndex property
// Add button/input type pseudos
// Add the top/left cssHooks using jQuery.fn.position
// Always assume duplicates if they aren't passed to the comparison function
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// AMD loader is present. jQuery is a special case. For more information, see
// and CommonJS for browser emulators (#13566)
// Animations created synchronously will run synchronously
// Attach a bunch of functions for handling common AJAX events
// Back Compat <1.8 extension point
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
// Base inspection function for prefilters and transports
// Based off of the plugin by Clint Helfers, with permission.
// Bind script tag hack transport
// Called only from within defaultDisplay
// Can't be in strict mode, several libs including ASP.NET trace
// checks a cache object for emptiness
// context (optional): If specified, the fragment will be created in this context,
// Convert String-formatted options into Object-formatted ones
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
// Create mouseenter/leave events using mouseover/out and event-time checks
// Create scrollLeft and scrollTop methods
// Create the request object
// Create transport if the browser can provide an xhr
// Cross-browser xml parsing
// data: string of html
// declare themselves as anonymous modules, and avoid setting a global if an
// Default jsonp settings
// defaults to document
// Defining this global in .jshintrc would create a danger of using the global
// derived from file names, and jQuery is normally delivered in a lowercase
// Detached nodes confoundingly follow *each other*
// Detect, normalize options and install callbacks for jsonp requests
// Determine support properties
// Do the same for pointerenter/pointerleave and pointerover/pointerout
// Easy API for creating new setFilters
// Execute ASAP in case we need to set body.style.zoom
// Expose jQuery and $ identifiers, even in
// Expose support vars for convenience
// false until the test is run
// file name. Do this after creating the global so that if an AMD module wants
// files that may use define, but not via a proper concatenation script that
// Firefox doesn't have focus(in | out) events
// fix oldIE attroperties
// Fixes #9887
// focus(in | out) events fire after focus & blur events,
// for the description of the bug (it existed in older Chrome versions as well).
// forces the browser to respect setting selected
// Functions to create xhrs
// Generate parameters to create a standard animation
// Generate shortcuts for custom animations
// getComputedStyle returns percent when specified for top/left/bottom/right
// Give the init function the jQuery prototype for later instantiation
// Handle cache's special case and global
// Hooks for boolean attributes
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
// https://code.google.com/p/chromium/issues/detail?id=470258
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
// IE change delegation and checkbox/radio fix
// IE submit delegation
// IE6/7 call enctype encoding
// IE6/7 do not support getting/setting some attributes with get/setAttribute
// Implement the identical functionality for filter and not
// Initialize a jQuery object
// Initialize against the default document
// Initialize central reference
// Install script dataType
// Iteration over object's inherited properties before its own
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// JSHint would error on this code due to the Symbol not being defined in ES5.
// Keep a copy of the old load method
// keepScripts (optional): If true, will include scripts passed in the html string
// key/values into a query string
// Kick off the DOM ready check even if the user does not
// Manipulating tables requires a tbody
// Mark scripts as having already been evaluated
// Multifunctional method to get and set values of a collection
// Note that for maximum portability, libraries that are not jQuery should
// Note: most support tests are defined in their respective modules.
// on the option
// One-time assignments
// Open requests must be manually aborted on unload (#5280)
// Optimize for push.apply( _, NodeList )
// Panic based approach to setting things on disconnected nodes
// Pass this if window is not defined yet
// Populate the class2type map
// Prevent attribute/property "interpolation"
// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
// Radios and checkboxes getter/setter
// rather than make the css module depend on the offset module, we just check for it here
// Register as a named AMD module, since jQuery can be concatenated with other
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
// Replace/restore the type attribute of script elements for safe DOM manipulation
// return a css property mapped to a potentially vendor prefixed property
// Return jQuery for attributes-only inclusion
// Safari sends mouseenter too often; see:
// See #13393 for more info
// See https://support.microsoft.com/kb/2856746 for more info
// Serialize an array of form elements or a set of
// so that event delegation works in jQuery.
// Some attributes require a special call on IE
// Sort stability
// Support: Chrome 14-35+
// Support: Chrome, Safari
// Support: Firefox
// Support: Firefox 18+
// Support: IE <=9
// Support: IE8-IE9
// Support: IE9
// Support: IE<10
// Support: IE<8
// Support: IE<8
// Support: IE<9
// Support: IE<9
// Support: IE<9
// Support: Safari 7 only
// Support: Safari, IE9+
// Support: Safari<7-8+, Chrome<37-44+
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// that takes "flat" options (not to be deep extended)
// The deferred used on DOM ready
// The getter ensures a default option is selected
// The number of elements contained in the matched element set
// the stack via arguments.caller.callee and Firefox dies if
// The value/s can optionally be executed if it's a function
// These hooks are used by animate to expand properties
// three lines.
// to call noConflict to hide this version of jQuery, it will work.
// understands anonymous AMD modules. A named AMD is safest and most robust
// unguarded in another place, it seems safer to just disable JSHint for these
// Use defaultValue in place of getAttribute("value")
// Use getAttributeNode to fetch booleans when getAttribute lies
// way to register. Lowercase jquery is used because AMD module names are
// We have to close these tags to support XHTML (#13200)
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// when in an optgroup
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
], function( i, type ) {
], function() {
boolHook = {
compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
Expr = Sizzle.selectors = {
Expr.pseudos["nth"] = Expr.pseudos["eq"];
Expr.setFilters = new setFilters();
for ( i in jQuery( support ) ) {
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
for ( i in { submit: true, reset: true } ) {
function actualDisplay( name, doc ) {
function addCombinator( matcher, combinator, base ) {
function addGetHookIf( conditionFn, hookFn ) {
function addHandle( attrs, handler ) {
function addToPrefiltersOrTransports( structure ) {
function adjustCSS( elem, prop, valueParts, tween ) {
function ajaxConvert( s, response, jqXHR, isSuccess ) {
function ajaxExtend( target, src ) {
function ajaxHandleResponses( s, jqXHR, responses ) {
function Animation( elem, properties, options ) {
function assert( fn ) {
function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
function buildFragment( elems, context, scripts, selection, ignored ) {
function buildParams( prefix, obj, traditional, add ) {
function cloneCopyEvent( src, dest ) {
function completed() {
function condense( unmatched, map, filter, context, xml ) {
function createActiveXHR() {
function createButtonPseudo( type ) {
function createCache() {
function createFxNow() {
function createInputPseudo( type ) {
function createOptions( options ) {
function createPositionalPseudo( fn ) {
function createSafeFragment( document ) {
function createStandardXHR() {
function createTween( value, prop, animation ) {
function dataAttr( elem, key, data ) {
function defaultDisplay( nodeName ) {
function defaultPrefilter( elem, props, opts ) {
function detach() {
function disableScript( elem ) {
function domManip( collection, args, callback, ignored ) {
function elementMatcher( matchers ) {
function filterHidden( elem ) {
function fixCloneNodeIssues( src, dest ) {
function fixDefaultChecked( elem ) {
function genFx( type, includeWidth ) {
function getAll( context, tag ) {
function getClass( elem ) {
function getDisplay( elem ) {
function getWidthOrHeight( elem, name, extra ) {
function getWindow( elem ) {
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
function internalRemoveData( elem, name, pvt ) {
function isArrayLike( obj ) {
function isEmptyDataObject( obj ) {
function manipulationTarget( elem, content ) {
function markFunction( fn ) {
function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
function matcherFromTokens( tokens ) {
function multipleContexts( selector, contexts, results ) {
function on( elem, types, selector, data, fn, one ) {
function propFilter( props, specialEasing ) {
function remove( elem, selector, keepData ) {
function restoreScript( elem ) {
function returnFalse() {
function returnTrue() {
function safeActiveElement() {
function setFilters() {}
function setGlobalEval( elems, refElements ) {
function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
function setPositiveNumber( elem, value, subtract ) {
function showHide( elements, show ) {
function sibling( cur, dir ) {
function siblingCheck( a, b ) {
function Sizzle( selector, context, results, seed ) {
function testContext( context ) {
function toSelector( tokens ) {
function Tween( elem, options, prop, end, easing ) {
function vendorPropName( name ) {
function winnow( elements, qualifier, not ) {
function( i, name ) {
getText = Sizzle.getText = function( elem ) {
if ( !assert(function( div ) {
if ( !assert(function( div ) {
if ( !getSetAttribute ) {
if ( !getSetInput || !getSetAttribute ) {
if ( !noGlobal ) {
if ( !support.attributes || !assert(function( div ) {
if ( !support.change ) {
if ( !support.enctype ) {
if ( !support.focusin ) {
if ( !support.hrefNormalized ) {
if ( !support.opacity ) {
if ( !support.optSelected ) {
if ( !support.style ) {
if ( !support.submit ) {
if ( typeof define === "function" && define.amd ) {
if ( typeof Symbol === "function" ) {
if ( window.attachEvent ) {
if ( window.getComputedStyle ) {
if ( xhrSupported ) {
init.prototype = jQuery.fn;
isXML = Sizzle.isXML = function( elem ) {
jQuery( function() {
jQuery._evalUrl = function( url ) {
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
jQuery.ajaxPrefilter( "script", function( s ) {
jQuery.ajaxPrefilter( function( s ) {
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
jQuery.ajaxSetup( {
jQuery.ajaxSetup( {
jQuery.ajaxTransport( "script", function( s ) {
jQuery.Animation = jQuery.extend( Animation, {
jQuery.Callbacks = function( options ) {
jQuery.contains = Sizzle.contains;
jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
jQuery.each( [
jQuery.each( [
jQuery.each( [ "get", "post" ], function( i, method ) {
jQuery.each( [ "height", "width" ], function( i, name ) {
jQuery.each( [ "radio", "checkbox" ], function() {
jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
jQuery.each( [ "top", "left" ], function( i, prop ) {
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
jQuery.each( {
jQuery.each( {
jQuery.each( {
jQuery.each( {
jQuery.each( {
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
jQuery.easing = {
jQuery.Event = function( src, props ) {
jQuery.event = {
jQuery.Event.prototype = {
jQuery.expr = Sizzle.selectors;
jQuery.expr.filters.animated = function( elem ) {
jQuery.expr.filters.hidden = function( elem ) {
jQuery.expr.filters.visible = function( elem ) {
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.extend = jQuery.fn.extend = function() {
jQuery.extend( {
jQuery.extend( {
jQuery.extend( {
jQuery.extend( {
jQuery.extend( {
jQuery.extend( {
jQuery.extend( {
jQuery.extend( {
jQuery.extend( {
jQuery.extend( {
jQuery.extend( {
jQuery.filter = function( expr, elems, not ) {
jQuery.find = Sizzle;
jQuery.fn = jQuery.prototype = {
jQuery.fn.andSelf = jQuery.fn.addBack;
jQuery.fn.delay = function( time, type ) {
jQuery.fn.extend( {
jQuery.fn.extend( {
jQuery.fn.extend( {
jQuery.fn.extend( {
jQuery.fn.extend( {
jQuery.fn.extend( {
jQuery.fn.extend( {
jQuery.fn.extend( {
jQuery.fn.extend( {
jQuery.fn.extend( {
jQuery.fn.extend( {
jQuery.fn.extend( {
jQuery.fn.extend( {
jQuery.fn.extend( {
jQuery.fn.extend( {
jQuery.fn.extend( {
jQuery.fn.extend( {
jQuery.fn.load = function( url, params, callback ) {
jQuery.fn.ready = function( fn ) {
jQuery.fn.size = function() {
jQuery.fx = Tween.prototype.init;
jQuery.fx.interval = 13;
jQuery.fx.speeds = {
jQuery.fx.start = function() {
jQuery.fx.step = {};
jQuery.fx.stop = function() {
jQuery.fx.tick = function() {
jQuery.fx.timer = function( timer ) {
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.noConflict = function( deep ) {
jQuery.offset = {
jQuery.param = function( a, traditional ) {
jQuery.parseHTML = function( data, context, keepScripts ) {
jQuery.parseJSON = function( data ) {
jQuery.parseXML = function( data ) {
jQuery.ready.promise = function( obj ) {
jQuery.ready.promise();
jQuery.removeEvent = document.removeEventListener ?
jQuery.speed = function( speed, easing, fn ) {
jQuery.text = Sizzle.getText;
jQuery.timers = [];
jQuery.Tween = Tween;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
return jQuery;
return Sizzle;
rootjQuery = jQuery( document );
select = Sizzle.select = function( selector, context, results, seed ) {
setDocument = Sizzle.setDocument = function( node ) {
setDocument();
setFilters.prototype = Expr.filters = Expr.pseudos;
Sizzle.attr = function( elem, name ) {
Sizzle.contains = function( context, elem ) {
Sizzle.error = function( msg ) {
Sizzle.matches = function( expr, elements ) {
Sizzle.matchesSelector = function( elem, expr ) {
Sizzle.uniqueSort = function( results ) {
support = Sizzle.support = {};
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.detectDuplicates = !!hasDuplicate;
support.inlineBlockNeedsLayout = false;
support.ownFirst = i === "0";
support.sortDetached = assert(function( div1 ) {
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
try {
Tween.propHooks = {
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
Tween.prototype = {
Tween.prototype.init.prototype = Tween.prototype;
var
var
var
var
var
var _load = jQuery.fn.load;
var acceptData = function( elem ) {
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
var class2type = {};
var concat = deletedIds.concat;
var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
var deletedIds = [];
var dir = function( elem, dir, until ) {
var document = window.document;
var documentElement = document.documentElement;
var getStyles, curCSS,
var hasOwn = class2type.hasOwnProperty;
var i,
var i;
var iframe,
var indexOf = deletedIds.indexOf;
var isHidden = function( elem, el ) {
var location = window.location;
var nodeHook, boolHook,
var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
var nonce = jQuery.now();
var oldCallbacks = [],
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
var push = deletedIds.push;
var r20 = /%20/g,
var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
var rcheckableType = ( /^(?:checkbox|radio)$/i );
var rclass = /[\t\r\n\f]/g;
var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
var readyList;
var rfocusable = /^(?:input|select|textarea|button|object)$/i,
var rformElems = /^(?:input|select|textarea)$/i,
var rhtml = /<|&#?\w+;/,
var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
var risSimple = /^.[^:#\[\.,]*$/;
var rleadingWhitespace = ( /^\s+/ );
var rmargin = ( /^margin/ );
var rneedsContext = jQuery.expr.match.needsContext;
var rnotwhite = ( /\S+/g );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
var rootjQuery,
var rparentsprev = /^(?:parents|prev(?:Until|All))/,
var rquery = ( /\?/ );
var rreturn = /\r/g,
var rscriptType = ( /^$|\/(?:java|ecma)script/i );
var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );
var rtagName = ( /<([\w:-]+)/ );
var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
var siblings = function( n, elem ) {
var Sizzle =
var slice = deletedIds.slice;
var support = {};
var swap = function( elem, options, callback, args ) {
var toString = class2type.toString;
var wrapMap = {
var xhrId = 0,
wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;
xhrSupported = support.ajax = !!xhrSupported;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} )();
} )();
} )();
} )();
} )();
} )();
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} );
} catch ( e ) {
} else if ( documentElement.currentStyle ) {
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
}) ) {
}) ) {
}) ) {
})( window );
}));
});
}, function( name, fn ) {
}, function( name, original ) {
}, function( name, props ) {
}, function( orig, fix ) {
}, function( prefix, suffix ) {
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};
};