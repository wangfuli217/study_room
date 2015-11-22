template <typename T>
String String::fromUtf8(T begin, T end)
{
    String string;
    Utf8::toUtf32(begin, end, std::back_inserter(string.m_string));
    return string;
}
