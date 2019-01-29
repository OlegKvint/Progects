<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '!z}ihx</zp(_bb:_|xR]4Cq)7> DZ~isvb!6%0=fbPlefSG`oA=%S7h-gM *j@H@');
define('SECURE_AUTH_KEY',  '2IEb4k>t[Df5!6>YnzVHk]JI|.D7.[c2rY?&L-iUY]>JK$BP^4h-ff@{QA^OFP|=');
define('LOGGED_IN_KEY',    ';N])N:/pNd(Wv}&AtW`V^WefkuLCJU}#/E)*Q[o,C~52OX&!7ddq?]>Tx9}F?RwT');
define('NONCE_KEY',        '{Hx52k;Mlvymc#iUL~<IWo[_<L]gcrs-Kb>&DY83yk>+ ~sL.,u&c3[6)E@dZ:qi');
define('AUTH_SALT',        '%tDZBCe8sNMz C*o<j! 06UaQeE.lul<)V2nwczOW;pg3px#f;GbL1zFLGC=;qDf');
define('SECURE_AUTH_SALT', '98O;5Wm|!3,K:X!4)!A&X[=T,~X^UHK!tN@+Z/>t94;kCl9HAWD~z(ZbG%C-)itp');
define('LOGGED_IN_SALT',   '^S4].Z-7?N88NV(4vGxo~-197ew zRnAP U:!qt?XXzDXCc=.B7ih,OA=>)_p1xY');
define('NONCE_SALT',       '/JY!x@YSYVz>>K/dSFNw0M9&c^Cs2sm}2[9}R}Ur2/x{O>{M4MmnKx<=va9}-|-d');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
