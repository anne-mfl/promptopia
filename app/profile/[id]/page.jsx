'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Profile from '@components/Profile'

const page = ({ params }) => {
  const searchParams = useSearchParams()
  const userName = searchParams.get('name')

  const [posts, setPosts] = useState([])
  console.log('posts in PROFILE =>', posts)


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`)
      const data = await response.json()
      setPosts(data)
    }
    if (params?.id) fetchPosts()
  }, [params.id])


  return (
    <Profile
      name={`${userName}'s`}
      desc={`Welcome to ${userName}'s personalized profile page`}
      data={posts}
    />
  )
}

export default page