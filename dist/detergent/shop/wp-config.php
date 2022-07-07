<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ileys_commerce' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Ww5pz<%M1tr%}m CNhs@2 wy_g_G;|NS*}k*A<sNUYf=daz0yCh|@V8^SP9*W*Sa' );
define( 'SECURE_AUTH_KEY',  '}%wn@[Q7KIHxv)P0!2Sf68OqE{64eB3l{duJcU][fgkMqLJAmki6XdAs;&b/&ymH' );
define( 'LOGGED_IN_KEY',    '@7aC=rN<.KF+I|X3CvH8q(NW1PW90O.{G#R(pyu|{sBVS)VIiHDk[N|rRCfYvUf}' );
define( 'NONCE_KEY',        'caK%2w?@H|PQFXGLxv$/n3}he}QLeBM[5=SI+V$Q5Z^?B7)|bUqH_U$k!k:@SGjP' );
define( 'AUTH_SALT',        'f6}rm~YQkaONxL7L(;I4_qxs?[n)qH(r K{.xf`JjvF/^KJ^1&L[AQ7FF;Nf3KZ8' );
define( 'SECURE_AUTH_SALT', '=3I[r7klHexu2r&MC#.{T2;j6i{e*9Sg<i|:$-?lq2J27-xo-6W>(4)#JGtK+I:9' );
define( 'LOGGED_IN_SALT',   '43M:6*XJUzw#vwNz3~2$,_5C=|3 60$/~ui=.K#vC)IOU^g9&9vuTl+bdaZB<(6V' );
define( 'NONCE_SALT',       'peSrY`Ug|:3R&-Q0g~A{YBoY9^aR*I!nTbKEk>WcmDW3FQ#?eFjb2*I?cbIh}r]4' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
