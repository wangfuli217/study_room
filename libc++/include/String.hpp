#ifndef __STRING_H__
#define __STRING_H__

#include <Utf.hpp>
#include <locale>
#include <string>

/**
 * \brief namespace : cr(CloudRain21) (my private library)
 */
namespace cr
{

/**
 * \brief  Utility string class that automatically handles
 *         coversions between types and encodings
 *
 * cr::String is a utility string class defined mainly for
 * convenience. It is a Unicode string (implemented using
 * UTF-32), thus it can store any character in the world
 * (European, Chinese, Arabic, Hebrew, etc.).
 *
 * It automatically handles conversions from/to ANSI and
 * wide strings, so that you can work with standard string
 * classes and still be compatible with functions taking a
 * cr::String.
 */
class String
{
public:

	typedef std::basic_string<Uint32>::iterator        Iterator;
	typedef std::basic_string<Uint32>::const_iterator  ConstIterator; /**< read-only */

	static const std::size_t InvalidPos;   /**< invalid position in the string */

	/**
	 * \brief Default constructor
	 *
	 * create empty string
	 */
	String();

	/**
	 * \brief Construct from a single ANSI character and a locale
	 *
	 * The source character is converted to UTF-32 according
	 * to the given locale.
	 * 
	 * \param ansiChar ANSI character to convert
	 * \param locale   Locale to use for conversion
	 */
	String(char ansiChar, const std::locale& locale = std::locale());

	/**
	 * \brief Construct from single UTF-32 charater
	 *
	 * \param wideChar Wide character to convert
	 */
	String(wchar_t wideChar);

	/**
	 * \brief Construct from single UTF-32 character
	 *
	 * \param utf32Char UTF-32 character to convert
	 */
	String(Uint32 utf32Char);


	/**
	 * \brief Construct from a null-terminated C-style ANSI string and a locale
	 *
	 * The source string is converted to UTF-32 according to the given locale. 
	 *
	 * \param ansiString ANSI string to convert
	 * \param locale     Locale to use for conversion
	 */
	String(const char* ansiString, const std::locale& locale = std::locale());

	/**
	 * \brief Construct from ANSI string and a locale
	 *
	 * The source string is converted to UTF-32 according to the given locale. 
	 *
	 * \param ansiString ANSI string to convert
	 * \param locale     Locale to use for conversion
	 */
	String(const std::string& ansiString, const std::locale& locale = std::locale());

	/**
	 * \brief Construct from null-terminated C-style wide string
	 *
	 * \param wideString wide string to convert
	 */
	String(const wchar_t* wideString);

	/**
	 * \brief Construct from a wide string
	 *
	 * \param wideString wide string to convert
	 */
	String(const std::wstring& wideString);
	
	/**
	 * \brief Construct from a null-terminated C-style UTF-32 string
	 *
	 * \param utf32String UTF-32 string to assign
	 */
	String(const Uint32* utf32String);

	/**
	 * \brief Construct from an UTF-32 string
	 *
	 * \param utf32String UTF-32 string to assign
	 */
	String(const std::basic_string<Uint32>& utf32String);

	/**
	 * \brief Copy constructor
	 *
	 * \param copy Instance to copy
	 */
	String(const String& copy);

	/**
	 * \brief Create a new cr::String from a UTF-8 encoded string
	 *
	 * \param begin Forward iterator to the beginning of the UTF-8 sequence
	 * \param end   Forward iterator to the end of the UTF-8 sequence
	 *
	 * \return A cr::String containing the source string
	 *
	 * \see fromUtf16, from Utf32
	 */
	template<typename T>
    static String fromUtf8(T begin, T end);

	/**
	 * \brief Create a new cr::String from a UTF-16 encoded string
	 *
	 * \param begin Forward iterator to the beginning of the UTF-16 sequence
	 * \param end   Forward iterator to the end of the UTF-16 sequence
	 *
	 * \return A cr::String containing the source string
	 *
	 * \see fromUtf8, from Utf32
	 */
	template<typename T>
    static String fromUtf16(T begin, T end);

	/**
	 * \brief Create a new cr::String from a UTF-32 encoded string
	 *
	 * This function is provided for consistency, it is equivalent to
	 * using the constructors that takes a const cr::Uint32* or
	 * a std::basic_string<cr::Uint32>.
	 *
	 * \param begin Forward iterator to the beginning of the UTF-16 sequence
	 * \param end   Forward iterator to the end of the UTF-16 sequence
	 *
	 * \return A cr::String containing the source string
	 *
	 * \see fromUtf8, from Utf32
	 */
	template<typename T>
    static String fromUtf32(T begin, T end);

	/**
	 * \brief Implicit conversion operator to std::string (ANSI string)
	 *
	 * The current global locale is used for conversion. If you
	 * want to explicitly specify a locale, see toAnsiString.
	 * Characters that do not fit in the target encoding are
	 * discarded from the returned string.
	 * This operator is defined for convenience, and is equivalent
	 * to calling toAnsiString().
	 *
	 * \return Converted ANSI string
	 *
	 * \see toAnsiString, operator std::wstring
	 */
    operator std::string() const;

    /**
     * \brief Implicit conversion operator to std::wstring (wide string)
     *
     * Characters that do not fit in the target encoding are
     * discarded from the returned string.
     * This operator is defined for convenience, and is equivalent
     * to calling toWideString().
     *
     * \return Converted wide string
     *
     * \see toWideString, operator std::string
     */
    operator std::wstring() const;

    /**
     * \brief Convert the Unicode string to an ANSI string
     *
     * The UTF-32 string is converted to an ANSI string in
     * the encoding defined by \a locale.
     *
     * \param locale Locale to use for conversion
     *
     * \return Converted ANSI string
     *
     * \see toWideString, operator std::string
     */
    std::string toAnsiString(const std::locale& locale = std::locale()) const;

    /**
     * \brief Convert the Unicode string to a wide string
     *
     * Characters that do not fit in the target encoding are
     * discarded from the returned string.
     *
     * \return Converted wide string
     *
     * \see toAnsiString, operator std::wstring
     */
    std::wstring toWideString() const;

    /**
     * \brief Convert the Unicode string to a UTF-8 string
     *
     * \return Converted UTF-8 string
     *
     * \see toUtf16, toUtf32
     */
    std::basic_string<Uint8> toUtf8() const;

    /**
     * \brief Convert the Unicode string to a UTF-16 string
     *
     * \return Converted UTF-16 string
     *
     * \see toUtf8, toUtf32
     */
    std::basic_string<Uint16> toUtf16() const;

    /**
     * \brief Convert the Unicode string to a UTF-32 string
     *
     * This function doesn't perform any conversion, since the
     * string is already stored as UTF-32 internally.
     *
     * \return Converted UTF-32 string
     *
     * \see toUtf8, toUtf16
     */
    std::basic_string<Uint32> toUtf32() const;

    /**
     * \brief Overload of assignment operator
     *
     * \param right Instance to assign
     *
     * \return Reference to self
     */
    String& operator = (const String& right);

    /**
     * \brief Overload of += operator to append an UTF-32 string
     *
     * \param right String to append
     *
     * \return Reference to self
     */
    String& operator += (const String& right);

    /**
     * \brief Overload of [] operator to access a character by its position
     *
     * This function provides read-only access to characters.
     * Note : the behavior is undefined if \a index is out of range.
     *
     * \param index Index of the character to get
     *
     * \return Character at position \a index
     */
    Uint32 operator [] (std::size_t index) const;

    /**
     * \brief Overload of [] operator to access a character by its position
     *
     * This function provides read and write access to characters.
     * Note : the behavior is undefined if \a index is out of range.
     *
     * \param index Index of the character to get
     *
     * \return Reference to the character at position \a index
     */
    Uint32& operator [] (std::size_t index);

    /**
     * \brief Clear the string
     *
     * This function removes all the characters from the string.
     *
     * \see isEmpty, erase
     */
    void clear();

    /**
     * \brief Get the size of the string
     *
     * \return Number of characters in the string
     *
     * \see isEmpty
     */
    std::size_t getSize() const;

    /**
     * \brief Check whether the string is empty or not
     *
     * \return True if the string is empty (i.e. contains no character)
     *
     * \see clear, getSize
     */
    bool isEmpty() const;

    /**
     * \brief Erase one or more characters from the string
     *
     * This function removes a sequence of \a count characters
     * starting from \a position.
     *
     * \param position Position of the first character to erase
     * \param count    Number of characters to erase
     */
    void erase(std::size_t position, std::size_t count = 1);

    /**
     * \brief Insert one or more characters into the string
     *
     * This function inserts the characters of \a str
     * into the string, starting from \a position.
     *
     * \param position Position of insertion
     * \param str      Characters to insert
     */
    void insert(std::size_t position, const String& str);

    /**
     * \brief Find a sequence of one or more characters in the string
     *
     * This function searches for the characters of \a str
     * in the string, starting from \a start.
     *
     * \param str   Characters to find
     * \param start Where to begin searching
     *
     * \return Position of \a str in the string, or String::InvalidPos if not found
     */
    std::size_t find(const String& str, std::size_t start = 0) const;

    /**
     * \brief Replace a substring with another tring
     *
     * This function replaces the substring that starts at index \a position
     * ans spans \a length characters with the string \a replaceWith.
     *
     * \param position    Index of the first character to be replaced
     * \param length      Number of characters to replace. You can pass InvalidPos to
     *                    replace all characters until the end of the string.
     * \param replaceWith String that replaces the given substring.
     */
    void replace(std::size_t position, std::size_t length, const String& replaceWith);

    /**
     * \brief Replace all occurrences of a substring with a replacement string
     *
     * This function replaces all occurrences of \a searchFor in this string
     * with the string \a replaceWith.
     *
     * \param searchFor   The value begin searched for
     * \param replaceWith The value that replaces found \a searchFor values
     *
     */
    void replace(const String& searchFor, const String& replaceWith);

    /**
     * \brief Return a port of the string
     *
     * This function returns the substring that starts at index \a position
     * and spans \a length characters.
     *
     * \param position Index of the first character
     * \param length   Number of characters to include in the substring (if
     *                 the string is shorter, as many characters as possible
     *                 are included). \ref InvalidPos can be used to include all
     *                 characters until the end of the string.
     *
     * \return String object containing a substring of this object
     */
    String substring(std::size_t position, std::size_t length = InvalidPos) const;

    /**
     * \brief Get a pointer to the C-style array of characters
     *
     * This functions provides a read-only access to a
     * null-terminated C-style representation of the string.
     * The returned pointer is temporary and is meant only for
     * immediate use, thus it is not recommended to store it.
     *
     * \return Read-only pointer to the array of characters
     */
    const Uint32* getData() const;

    /**
     * \brief Return an iterator to the beginning of the string
     *
     * \return Read-write iterator to the beginning of the string characters
     *
     * \see end
     */
    Iterator begin();

    /**
     * \brief Return an iterator to the beginning of the string
     *
     * \return Read-only iterator to the beginning of the string characters
     *
     * \see end
     */
    ConstIterator begin() const;

    /**
     * \brief Return an iterator to the end of the string
     *
     * The end iterator refers to 1 position past the last character;
     * thus it represents an invalid character and should never be
     * accessed.
     *
     * \return Read-write iterator to the end of the string characters
     *
     * \see begin
     */
    Iterator end();

    /**
     * \brief Return an iterator to the end of the string
     *
     * The end iterator refers to 1 position past the last characters;
     * thus it represents an invalid character and should never be
     * accessed.
     *
     * \return Read-only iterator to the end of the string characters
     *
     * \see begin
     */
    ConstIterator end() const;
	
private:
    friend bool operator == (const String& left, const String& right);
    friend bool operator  < (const String& left, const String& right);
    friend std::istream& operator >> (std::istream& os, String& str);

    std::basic_string<Uint32> m_string;  /**< internal UTF-32 character string */
};


/**
 * \relates String
 * \brief Overload of various operators to compare two UTF-32 strings
 *
 * \param left  Left operand (a string)
 * \param right Right operand (a string)
 */
bool operator == (const String& left, const String& right);
bool operator != (const String& left, const String& right);
bool operator  < (const String& left, const String& right);
bool operator  > (const String& left, const String& right);
bool operator <= (const String& left, const String& right);
bool operator >= (const String& left, const String& right);

/**
 * \relates String
 * \brief Overload of binary + operator to concatenate two strings
 *
 * \param left  Left operand (a string)
 * \param right Right operand (a string)
 *
 * \return Concatenated string
 */
String operator + (const String& left, const String& right);

/**
 * \relates String
 * \brief output stream
 *
 * \param os  Output stream (left operand)
 * \param str String (right operand)
 *
 * \return Output stream
 */
//std::ostream& operator << (std::ostream& os, const String& str);

/**
 * \relates String
 * \brief input stream
 *
 * \param is  Input stream (left operand)
 * \param str String (right operand)
 *
 * \return Input stream
 */
//std::istream& operator >> (std::istream& os, String& str);

#include <String.inl>

};  // namespace cr

#endif // __STRING_H__



/**
 * \brief How to Use
 * You can create a string instance and initialize it in any ways.
 *
 * \code
 * cr::String s;
 *
 * std::string s1 = s;  // automatically converted to ANSI string
 * std::wstring s2 = s; // automatically converted to wide string
 * s = "hello";         // automatically converted from ANSI string
 * s = L"hello";        // automatically converted from wide string
 * s += 'a';            // automatically converted from ANSI string
 * s += L'a';           // automatically converted from wide string
 *
 * cr::String s3("world");
 * std::cout << s() << " " << s3 << std::endl;
 * \endcode
 *
 * Conversions involving ANSI strings use the default user locale. However
 * it is possible to use a custom locale if necessary:
 *
 * \code
 * std::locale locale;
 * cr::String s;
 * ...
 * std::string s1 = s.toAnsiString(locale);
 * s = cr::String("hello", locale);
 * \endcode
 */
