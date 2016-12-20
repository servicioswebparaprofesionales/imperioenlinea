/**
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function ( $ ) {

    // Site Title
    wp.customize( 'blogname', function ( value ) {
        value.bind( function ( to ) {
            $( '.site-title a' ).text( to );
        } );
    } );

    // Site Description
    wp.customize( 'blogdescription', function ( value ) {
        value.bind( function ( to ) {
            $( '.site-description' ).text( to );
        } );
    } );

} )( jQuery );